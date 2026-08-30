function status(request, response) {
  response.status(200).json({ msg: "hello world" });
}

export default status;
