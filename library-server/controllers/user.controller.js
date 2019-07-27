const jwt = require('jsonwebtoken');
const User = require('./../models/user.model');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

const createSendToken = (user, statusCode, req, res, role) => {
    const token = signToken(user._id);
      res.status(statusCode).json({
    status: 'success',
    token,
    role,
    data: {
      user
    }
  });
};

exports.signup = async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        role: req.body.role
      });
      console.log(req.body);
      
      createSendToken(newUser, 201, req, res);
}

exports.login = async (req, res, next) => {
  const {email, password} = req.body;

  // check apakah email dan password ada
  if(!email || !password) {
     res.status(400).json({
       login: false,
       status:'Please provide email and password',
     }) 
  }
  // check apakah user ada dan passwordnya benar
  const user = await User.findOne({ email }).select('+password')

  if (!user || !(await user.correctPassword(password, user.password))) {
      res.status(401).json({
        login: false,
        status: 'Incorrect email or password',
      }) 
  }
  
  // jika semua lengkap, sediakan token
  const token = signToken(user._id);

  res.status(200).json({
      status: 'success',
      token
  })  
}

exports.protect = async (req, res, next) => {
  // dpt token dan check
  let token;
  if(
    req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  console.log(token);
  
  if(!token) {
    return next(
     'You are not logged in!, Please log in to get access', 401
    )
  } 
  //  next()
}

