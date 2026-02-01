import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import AuthenticatedRoute from "../components/AuthenticatedRoute";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import type { FilePayload } from "../types";
import { generateRandomId, supabase } from "../utils";
import { SUPABASE_IMAGE_URL } from "../constants";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AdminUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [payload, setPayload] = useState<FilePayload>({
    name: "",
    url: "",
    size: "square",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setUploadedFile(file);
    }
  };

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPayload({
      ...payload,
      name: event.target.value,
    });
  };

  const handleSizeChange = (event: SelectChangeEvent) => {
    setPayload({
      ...payload,
      size: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!uploadedFile) {
      return;
    }

    const randomId = generateRandomId();

    const { data, error: imageUploadError } = await supabase.storage
      .from("images")
      .upload(`public/${uploadedFile.name}-${randomId}`, uploadedFile);

    if (!imageUploadError) {
      await supabase.from("images").insert([
        {
          ...payload,
          url: `${SUPABASE_IMAGE_URL}/${data.fullPath}`,
        },
      ]);
    }
  };

  return (
    <AuthenticatedRoute>
      <Stack
        component="form"
        spacing={2}
        sx={{
          maxWidth: "350px",
          width: "100%",
          p: 4,
          background: "white",
          borderRadius: 2,
          border: "1px solid black",
        }}
        onSubmit={handleSubmit}
      >
        <Typography>
          {uploadedFile?.name
            ? `File Name: ${uploadedFile.name}`
            : "Upload a file..."}
        </Typography>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          Upload
        </Button>
        <InputLabel id="name-label">Name</InputLabel>
        <TextField
          id="name"
          variant="filled"
          type="text"
          onChange={handleNameChange}
          value={payload.name}
        />
        <InputLabel id="size-label">Size</InputLabel>
        <Select
          labelId="size-label"
          id="size"
          value={payload.size}
          onChange={handleSizeChange}
          variant="outlined"
        >
          <MenuItem value="square">Square</MenuItem>
          <MenuItem value="wide">Wide</MenuItem>
          <MenuItem value="tall">Tall</MenuItem>
        </Select>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </AuthenticatedRoute>
  );
};

export default AdminUpload;
