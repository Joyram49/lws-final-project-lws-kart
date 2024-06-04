import BreadCrumb from "@/components/common/ui/BreadCrumb";

function PublicLayout({ children }) {
  return (
    <>
      <BreadCrumb />
      {children}
    </>
  );
}

export default PublicLayout;
