import { User } from '../src/db/couchbase';

const user = new User({
  email: 'user',
  password: 'password',
});

user.save((err, data) => console.log(err, data));
