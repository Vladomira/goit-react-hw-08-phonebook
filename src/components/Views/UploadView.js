import axios from "axios";

export default function UploadView() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target.file.input.files[0];

    const formData = new FormData();
    formData.append("image", file, file.name);

    axios.post("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" />
      <button type="submit">To load</button>
    </form>
  );
}
