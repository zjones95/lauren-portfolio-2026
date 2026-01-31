import AuthenticatedRoute from "../components/AuthenticatedRoute";

const Admin = () => {
  return (
    <AuthenticatedRoute>
      <div>admin</div>
    </AuthenticatedRoute>
  );
};

export default Admin;
