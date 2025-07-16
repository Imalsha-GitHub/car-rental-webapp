import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Car from "../models/Car.js";
import User from "../models/User.js";

//
export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
    res.json({
      success: true,
      message: "Role changed to owner successfully. Now you can list cars",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to List Car
export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;

    // Upload Image to ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    // Optimization through imagekit URL transformation
    var optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1280" }, //Width resizing
        { quality: "auto" }, // Auto compression
        { format: "webp" }, // Convert to modern format
      ],
    });

    const image = optimizedImageUrl;
    await Car.create({ ...car, owner: _id, image });

    res.json({ success: true, message: "Car added successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to list owner cars
export const getOwnerCars = async (req, res) => {
    try {
        const { _id } = req.user;
        const cars = await Car.find({ owner: _id });
        res.json({ success: true, cars });


    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// API to toggle car availability
export const toggleCarAvailability = async (req, res) => {
  try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById(carId);

        // Checking is car belongs to the user
        if(car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "You are not authorized to change this car's availability." });
        }

        car.isAvailable = !car.isAvailable;
        await car.save();


        res.json({ success: true, message: "Car availability toggled successfully"});


    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// API to delete a car
export const deleteCar = async (req, res) => {
  try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById(carId);

        // Checking is car belongs to the user
        if(car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "You are not authorized to change this car's availability." });
        }

        car.owner = null;
        car.isAvailable = false;

        await car.save();


        res.json({ success: true, message: "Car removed"});


    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}

// API to get dashboard data
export const getDashboardData = async (req, res) => {
    try {
        const {_id, role} = req.user;

        if(role !== "owner") {
            return res.json({ success: false, message: "You are not authorized to access this data." });
        }

        const cars = await Car.find({ owner: _id });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}