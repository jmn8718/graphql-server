import { bucket } from '../db/couchbase';
import ottoman from 'ottoman';
ottoman.bucket = bucket;

const User = ottoman.model('User', {
  email: 'string',
  password: 'string',
}, {
  index: {
    findByEmail: {
      by: 'email',
      type: 'refdoc'
    }
  }
});

module.exports = {
  User,
}
