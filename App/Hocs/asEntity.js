import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import get from 'lodash/get';
import defaults from 'lodash/defaults';

import EntityActions from '~/Redux/Actions/Entity';

export default (Configs = {}) => {
  const {storeId, autoRegister} = defaults(Configs, {
    storeId: null,
    autoRegister: true,
  });

  // If module not found return same component
  if (!storeId) {
    return Component => props => <Component {...props} />;
  }

  // Return Enhanced Component
  return Component => {
    class EntityComponent extends React.Component {
      get storeId() {
        return storeId;
      }

      get store() {
        const {entityStore} = this.props;

        return get(entityStore, `byId.${this.storeId}`, null);
      }

      get entityStore() {
        return {
          ...this.store,
          get: this.get,
          post: this.post,
          put: this.put,
          delete: this.delete,
        };
      }

      get _props() {
        const props = {...this.props};

        // Remove duplicated props.
        delete props.entityStore;
        delete props.register;
        delete props.get;
        delete props.post;
        delete props.put;
        delete props.delete;
        delete props.reset;
        delete props.resetProp;
        delete props.resetResponseProps;

        return props;
      }

      entityDidReceived(...reset) {
        this.component.entityDidReceived &&
          this.component.entityDidReceived(...reset);
      }

      entityDidPosted(...reset) {
        this.component.entityDidPosted &&
          this.component.entityDidPosted(...reset);
      }

      entityDidPut(...reset) {
        this.component.entityDidPut && this.component.entityDidPut(...reset);
      }

      entityDidDeleted(...reset) {
        this.component.entityDidDeleted &&
          this.component.entityDidDeleted(...reset);
      }

      entityDidCatch(...reset) {
        this.component.entityDidCatch &&
          this.component.entityDidCatch(...reset);
      }

      componentDidAppear(...reset) {
        this.component.componentDidAppear &&
          this.component.componentDidAppear(...reset);
      }

      register() {
        if (!this.store) {
          this.props.register(this.storeId);
        }
      }

      get = data => {
        this.props.get(this.storeId, data);
      };

      post = data => {
        this.props.post(this.storeId, data);
      };

      put = data => {
        this.props.put(this.storeId, data);
      };

      delete = data => {
        this.props.delete(this.storeId, data);
      };

      reset() {
        this.props.reset(this.storeId);
      }

      resetProp(prop) {
        this.props.resetProp(this.storeId, prop);
      }

      resetResponseProps() {
        this.props.resetResponseProps(this.resetProp);
      }

      isLoading = () => this.store.loading;

      componentDidMount() {
        if (autoRegister) {
          this.register();
        }
      }

      componentDidUpdate() {
        const {
          received,
          posted,
          updated,
          deleted,
          error,
          responseFromGet,
          responseFromPost,
          responseFromUpdate,
          responseFromRemove,
        } = defaults(this.store, {});

        if (received && !error) {
          this.entityDidReceived(responseFromGet);
          this.props.resetProp(this.storeId, 'received');
        }

        if (posted && !error) {
          this.entityDidPosted(responseFromPost);
          this.props.resetProp(this.storeId, 'posted');
        }

        if (updated && !error) {
          this.entityDidPut(responseFromUpdate);
          this.props.resetProp(this.storeId, 'updated');
        }

        if (deleted && !error) {
          this.entityDidDeleted(responseFromRemove);
          this.props.resetProp(this.storeId, 'deleted');
        }

        if (received && error) {
          this.entityDidCatch(error);
          this.props.resetProp(this.storeId, 'received');
        }

        if (posted && error) {
          this.entityDidCatch(error);
          this.props.resetProp(this.storeId, 'posted');
        }

        if (updated && error) {
          this.entityDidCatch(error);
          this.props.resetProp(this.storeId, 'updated');
        }

        if (deleted && error) {
          this.entityDidCatch(error);
          this.props.resetProp(this.storeId, 'deleted');
        }
      }

      componentWillUnmount() {
        if (this.store) {
          // this.props.resetProp(this.storeId, 'loading');
          // this.props.resetProp(this.storeId, 'errors');
        }
      }

      render() {
        if (this.store || !autoRegister) {
          return (
            <Component
              ref={ref => (this.component = ref)}
              {...this._props}
              entityStore={this.entityStore}
            />
          );
        }

        return null;
      }
    }

    EntityComponent.propTypes = {
      entityStore: PropTypes.object,

      register: PropTypes.func,
      get: PropTypes.func,
      post: PropTypes.func,
      put: PropTypes.func,
      delete: PropTypes.func,

      reset: PropTypes.func,
      resetProp: PropTypes.func,
      resetResponseProps: PropTypes.func,
    };

    EntityComponent.defaultProps = {
      entityStore: {},
    };

    const mapStateToProps = store => ({
      entityStore: store.entity,
    });

    const mapDispatchToProps = dispatch => ({
      register: id => dispatch(EntityActions.register(id)),
      get: (id, data) => dispatch(EntityActions.get(id, data)),
      getLatest: (id, data) => dispatch(EntityActions.getLatest(id, data)),
      post: (id, data) => dispatch(EntityActions.post(id, data)),
      put: (id, data) => dispatch(EntityActions.put(id, data)),
      delete: (id, data) => dispatch(EntityActions.delete(id, data)),
      reset: id => dispatch(EntityActions.reset(id)),
      resetProp: (id, prop) => dispatch(EntityActions.resetProp(id, prop)),
      resetResponseProps: id => dispatch(EntityActions.resetResponseProps(id)),
    });

    return connect(
      mapStateToProps,
      mapDispatchToProps,
    )(EntityComponent);
  };
};
