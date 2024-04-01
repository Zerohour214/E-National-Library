import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import { UserType,User } from '../models/user.js'
import { Coupon } from '../models/index.js'

const getUser = asyncHandler(async (req, res) => {
    const users = await User.find({});
    console.log(users)
    res.status(200).json(
        users
    )
})

const getUserType = asyncHandler(async (req, res) => {
    const userTypes = await UserType.find({});
    res.status(200).json(
        userTypes
    )
})

const getCoupon = asyncHandler(async (req, res) => {
    const coupons = await Coupon.find({});
    res.status(200).json(
        coupons
    )
})

export {
    getUser,
    getCoupon,
    getUserType
}