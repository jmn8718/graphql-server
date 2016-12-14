import config from '../../config.json';
import couchbase  from 'couchbase';
const cluster = new couchbase.Cluster(`couchbase://${config.couchbase.server.endpoint}`);
export const bucket = cluster.openBucket(config.couchbase.server.bucket);
import ottoman from 'ottoman';
ottoman.bucket = bucket;
