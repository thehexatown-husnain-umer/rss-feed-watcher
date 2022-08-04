const { off } = require("../model/upWorkJobs");
const UpWorkModel = require("../model/upWorkJobs");

exports.insertEntries = async (entries) => {
  try {
    console.log(entries.length);
    let items = entries.map((item) => {
      return {
        title: item.title,
        link: item.link,
        description: item.description,
        date: item.date,
      };
    });

    const data = await UpWorkModel.insertMany(
      items
      //     , {
      //   ordered: false,
      //   rawResult: true,
      // }
    )
      .then((data) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const data = await UpWorkModel.find();
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
