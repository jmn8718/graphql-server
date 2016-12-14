import { User } from '../src/models/user';

const email = 'my@email.com'
const user = new User({
  email: email,
  password: 'password',
});

user.save((err, data) => {
  User.findByEmail(email, (error, users) => {
    console.log(error, users)
  })
});
