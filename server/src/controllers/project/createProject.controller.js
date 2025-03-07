import { Project } from "../../models/project.schema.js";
import { createProjectSchema } from "../../schemas/project/createProject.schema.js";

export const createProject = async (req, res) => {
  try {
    const result = createProjectSchema.safeParse(req.body);
    if (!result.success) {
      return res.formatResponse(
        400,
        "invalid Input",
        null,
        result.error.format()
      );
    }

    const { name, description } = result.data;
    const createdBy = req.user;

    const newProject = await Project.insertOne({
      name,
      description,
      createdBy,
    });
    return res.formatResponse(
      200,
      "Project created successfully",
      newProject._id
    );
  } catch (error) {
    console.error(error);
    return res.formatResponse(
      500,
      "Server cannot be reached",
      null,
      error.message
    );
  }
};
