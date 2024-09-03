const TransactionModel = require('../models/transaction');

const defaultCon = async (req, res) => {
    let data = await TransactionModel.find({});
    console.log('default running');
    res.render('index', { Tracker: data });
};

const createTrackerCon = (req, res) => {
    res.render('addTransaction', { Tracker: null }); 
};

const addTrackerCon = async (req, res) => {
    console.log('Add Tracker');
    const newTracker = new TransactionModel(req.body); 
    await newTracker.save();
    res.redirect('/');
};

const singleTrackerCon = async (req, res) => {
    const { id } = req.params;
    let data = await TransactionModel.findOne({ _id: id });
    res.render('addTransaction', { Tracker: data });
};

const updateTrackerCon = async (req, res) => {
    const { id } = req.params;
    await TransactionModel.updateOne({ _id: id }, { $set: req.body });
    console.log('updated Tracker');
    res.redirect('/');
};

const deleteTrackerCon = async (req, res) => {
    const { id } = req.params;
    await TransactionModel.deleteOne({ _id: id });
    res.redirect('/');
};

const singleViewCon = async (req, res) => {
    const { id } = req.params;
    let data = await TransactionModel.findOne({ _id: id });
    console.log(data, 'single view');
    res.render('TrackerView', { tracker: data });
};

module.exports = { defaultCon, createTrackerCon, addTrackerCon, singleTrackerCon, updateTrackerCon, deleteTrackerCon, singleViewCon };
