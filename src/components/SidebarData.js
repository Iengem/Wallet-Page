import React from 'react'
import { BsBarChartLine, BsPeople } from 'react-icons/bs';
import { SlTrophy } from 'react-icons/sl';
import { IoSettingsOutline } from 'react-icons/io5';
import { TbWallet } from 'react-icons/tb';
import { RiHome5Line } from 'react-icons/ri'

export const sideBarData = [
    {
        icon: <RiHome5Line className='home'/>,
        title: 'Home',
        path: '/'
    },
    {
        icon: <TbWallet className='home'/>,
        title: 'Wallet',
        path: '/wallet'
    }
]