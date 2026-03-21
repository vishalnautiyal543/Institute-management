import {Student} from "../models/student.model.js"

const seedAdmin = async () => {
  try {
    const existingAdmin = await Student.findOne({ email: "admin@gmail.com" });

    if (existingAdmin) {
      console.log("Admin already exists ✅");
      return;
    }

    await Student.create({
      name: "admin",
      email: "admin@gmail.com",
      password: "admin123", // ideally hash karo
      role: "admin",
      rollNumber: "000000"
    });

    console.log("Admin seeding successfully ✅");

  } catch (error) {
    console.error("Seeding error:", error);
  }
};

export {seedAdmin}