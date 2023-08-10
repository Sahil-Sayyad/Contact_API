const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact");
const upload = require("../middleware/multer");
//@docs Get all contacts
//@route GET  /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});
//@docs Get contact
//@route GET  /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found");
  }
  res.status(200).json(contact);
});
//@docs Create New Contact
//@route POST  /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  // upload(req, res,function (err) {
  //   if (err instanceof multer.MulterError) {
  //     // A Multer error occurred when uploading.
  //     res.send(err);
  //   } else if (err) {
  //     // An unknown error occurred when uploading.
  //     res.send(err);
  //   }
  //   // Everything went fine.
  //   console.log(req.file);
  // })
  res.status(201).json(contact);
});
//@docs Update Contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found");
  }

  if (contact.user_id.toString() != req.user.id) {
    res.status(403);
    throw new Error(
      "Users Don't have permission to update other user contacts"
    );
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedContact);
});
//@docs Delete Contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not Found");
  }
  if (contact.user_id.toString() != req.user.id) {
    res.status(403);
    throw new Error(
      "Users Don't have permission to delete other user contacts"
    );
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
