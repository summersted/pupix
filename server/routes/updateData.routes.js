const { Router } = require('express');
const User = require('../models/User');
const router = Router();

// api/update/likedShowsId
router.post('/likedShowsId', async (req, res) => {
    try {
        // get user id
        const { _id } = req.body;
        try {
            // try to find user with that id
            const userData = await User.findOne({ _id });

            return res.status(200).json({
                ok: true,
                likedShowsId: userData.likedShowsId
            })
        } catch (error) {
            return res.status(400).json({ ok: false, message: 'Can`t find user with that user id.' });
        }
        
    } catch (error) {
        return res.status(500).json(
            {
                ok: false,
                message: 'Something went wrong, please try again.',
                error
            });
    }
})
// api/update/add/likedShowsId:id
router.put('/add/likedShowsId:id', async (req, res) => {
    try {
        // get show id from request
        const { id: showId } = req.params;
        // get user id
        const { _id } = req.body;
        try {
            // try to find user with that id and create an object with user data
            const oldUserData = await User.findOne({ _id });
            const oldUserDataObject = JSON.parse(JSON.stringify(oldUserData));
            // looking for dublicate of requested show id
            const dublicateIndex = oldUserDataObject.likedShowsId.indexOf(+showId.split(':')[1]);
            if (dublicateIndex !== -1) {
                return res.status(400).json({ ok: false, message: 'That show id already exists.' });
            }
            //extract 'likedShowsId' from old document and insert new show id there
            await User.updateOne({ _id }, {
                likedShowsId: [...oldUserDataObject.likedShowsId, +showId.split(':')[1]]
            })
            // if ok send response with status 200
            return res.status(200).json({
                ok: true,
                message: 'Data updated successfully.'
            })
        } catch (error) {
            return res.status(400).json({ ok: false, message: 'Can`t find user with that user id.' });
        }
    } catch (error) {
        return res.status(500).json(
            {
                ok: false,
                message: 'Something went wrong, please try again.',
                error
            });
    }
});
// api/update/del/likedShowsId:id
router.put('/del/likedShowsId:id', async (req, res) => {
    try {
        const { id: showId } = req.params;
        const { _id } = req.body;
        try {
            const oldUserData = await User.findOne({ _id });
            const oldUserDataObject = JSON.parse(JSON.stringify(oldUserData));

            const dublicateIndex = oldUserDataObject.likedShowsId.indexOf(+showId.split(':')[1]);
            if (dublicateIndex === -1) {
                return res.status(400).json({ ok: false, message: 'That show id doesn`t exist.' });
            }
            const oldLikedShowsId = oldUserDataObject.likedShowsId;
            const newLikedShowsId = [...oldLikedShowsId.slice(0,dublicateIndex),
                 ...oldLikedShowsId.slice(dublicateIndex+1)];
            await User.updateOne({ _id }, {
                likedShowsId: newLikedShowsId
            })

            return res.status(200).json({
                ok: true,
                message: 'Data updated successfully.'
            })
        } catch (error) {
            return res.status(400).json({ ok: false, message: 'Can`t find user with that user id.' });
        }
    } catch (error) {
        return res.status(500).json(
            {
                ok: false,
                message: 'Something went wrong, please try again.',
                error
            });
    }
});

module.exports = router;