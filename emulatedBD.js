const img1 = "https://github.com/SethRollins2k19/FTP/blob/master/room-1.png?raw=true"
const img2 = "https://github.com/SethRollins2k19/FTP/blob/master/room-2.png?raw=true"
const img3 = "https://github.com/SethRollins2k19/FTP/blob/master/room-3.png?raw=true"
const img4 = "https://github.com/SethRollins2k19/FTP/blob/master/room-4.png?raw=true"
const img5 = "https://github.com/SethRollins2k19/FTP/blob/master/room-5.png?raw=true"
const livingRoom = "https://github.com/SethRollins2k19/FTP/blob/master/room-1-livingRoom.png?raw=true"
const bedroom = "https://github.com/SethRollins2k19/FTP/blob/master/room-1-bedroom.png?raw=true"

exports.ROOMS = [
    {
        slug: 'lux-room',
        img: [img1,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: false,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        guests: {
            maxTotal: 4,
            Adults: 2,
            Children: 1,
            Babies: 1
        },
        details: ['comfort','convenience','cosiness'],
        minDate:"01/10/2020",
        maxDate:"06/10/2020",
        rules : ['No smoke', 'No children', 'No pets'],
        refund: "You can cancel your reservation with a 100% refund before 48 hours. After it, in time of 5 days, you can refund exclude service charge."
    },
    {
        slug: 'simple-room',
        img: [img4,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: true,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: 33,
            nice: 33,
            good: 33,
            bad: 33
        },
        guests: {
            maxTotal: 9,
            Adults: 2,
            Children: 3,
            Babies: 4
        },
        details: ['comfort','cosiness'],
        minDate:"03/11/2020",
        maxDate:"06/10/2020",
        rules : ['No smoke', 'No children', 'No pets'],
        refund: "You can cancel your reservation with a 100% refund before 48 hours. After it, in time of 5 days, you can refund exclude service charge."
    },
    {
        slug: 'soft-room',
        img: [img2,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: false,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        guests: {
            maxTotal: 9,
            Adults: 2,
            Children: 3,
            Babies: 4
        },
        details: ['comfort','convenience','cosiness'],
        minDate:"03/11/2020",
        maxDate:"06/10/2020",
        rules : ['No smoke', 'No children', 'No pets'],
        refund: "You can cancel your reservation with a 100% refund before 48 hours. After it, in time of 5 days, you can refund exclude service charge."
    },
    {
        slug: 'hard-room',
        img: [img3,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: false,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        guests: {
            maxTotal: 9,
            Adults: 2,
            Children: 3,
            Babies: 4
        },
        details: ['comfort','convenience','cosiness'],
        minDate:"03/11/2020",
        maxDate:"06/10/2020",
        rules : ['No smoke', 'No children', 'No pets'],
        refund: "You can cancel your reservation with a 100% refund before 48 hours. After it, in time of 5 days, you can refund exclude service charge."
    },
    {
        slug: 'luxary-room',
        img: [img5,bedroom,livingRoom],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: true,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        guests: {
            maxTotal: 9,
            Adults: 2,
            Children: 3,
            Babies: 4
        },
        details: ['comfort','convenience','cosiness'],
        minDate: "03/11/2020",
        maxDate:"06/10/2020",
        rules : ['No smoke', 'No children', 'No pets'],
        refund: "You can cancel your reservation with a 100% refund before 48 hours. After it, in time of 5 days, you can refund exclude service charge."
    },
    {
        slug: 'exclusive-room',
        img: [null,null,null],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: false,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        guests: {
            maxTotal: 9,
            Adults: 2,
            Children: 3,
            Babies: 4
        },
        details: ['comfort','convenience','cosiness'],
        minDate:"03/11/2020",
        maxDate:"06/10/2020",
        rules : ['No smoke', 'No children', 'No pets'],
        refund: "You can cancel your reservation with a 100% refund before 48 hours. After it, in time of 5 days, you can refund exclude service charge."
    },
    {
        slug: 'allIn-room',
        img: [null,null,null],
        hotelRoom: Math.floor(Math.random() * 999 + 1),
        isLux: true,
        costPerDay: Math.floor(Math.random() * 8801 + 200),
        rating: Math.floor(Math.random() * 5 + 1),
        reviews: {
            excellent: Math.floor(Math.random() * 100 + 1),
            nice: Math.floor(Math.random() * 100 + 1),
            good: Math.floor(Math.random() * 100 + 1),
            bad: Math.floor(Math.random() * 100 + 1)
        },
        guests: {
            maxTotal: 9,
            Adults: 2,
            Children: 3,
            Babies: 4
        },
        details: ['comfort','convenience','cosiness'],
        minDate:"03/11/2020",
        maxDate:"04/10/2020",
        rules : ['No smoke', 'No children', 'No pets'],
        refund: "You can cancel your reservation with a 100% refund before 48 hours. After it, in time of 5 days, you can refund exclude service charge."
    },
]
exports.USERS = [
    {
        id: 0,
        name: "Deninc",
        surname: "Nehui",
        email: "tsum@tsum.ru",
        password: "1001",
        orders: [],
        avatar: "https://github.com/SethRollins2k19/FTP/blob/master/room-1-bedroom.png?raw=true"
    }
]