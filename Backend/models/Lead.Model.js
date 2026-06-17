const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    company: {
      type: String,
      default: "",
    },

    source: {
      type: String,
      enum: ["website", "manual", "facebook", "linkedin"],
      default: "manual",
    },

    status: {
      type: String,
      enum: ["new", "contacted", "interested", "follow-up", "won", "lost"],
      default: "new",
    },

    notes: {
      type: String,
      default: "",
    },

    assignedAgent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);