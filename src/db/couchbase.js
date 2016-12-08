import config from '../../config.json';
import ottoman from 'ottoman';
import couchbase  from 'couchbase';
const cluster = new couchbase.Cluster(`couchbase://${config.couchbase.server.endpoint}`);
ottoman.bucket = cluster.openBucket(config.couchbase.server.bucket);

const User = ottoman.model('User', {
  email: 'string',
  password: 'string',
});

module.exports = {
  User: User,
}
