import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema({
  recipient: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: [
      "task_assigned",
      "task_updated",
      "comment_added",
      "file_attached",
      "project_added",
    ],
    required: true,
  },
  relatedTask: {
    type: Schema.Types.ObjectId,
    ref: "Task",
  },
  relatedProject: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Notification = mongoose.model("Notification", notificationSchema);
