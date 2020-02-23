import {Colors} from '~/Theme';

export default {
  iconWrapper: {
    borderWidth: 1,
    borderColor: 'transparent',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary[0],
    borderRadius: 1000,
    top: -30,
    left: -42,
    padding: 8,
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    borderRadius: 500,
    overflow: 'hidden',
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
};
