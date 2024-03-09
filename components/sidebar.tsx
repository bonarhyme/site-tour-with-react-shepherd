import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ShepherdTourContext } from "react-shepherd";
import { Button, Nav, NavItem } from "reactstrap";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "bi bi-speedometer2",
    id: "sidemenu-dashboard",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
    id: "sidemenu-about",
  },
];

export const Sidebar = () => {
  const location = useRouter();
  const tour = useContext(ShepherdTourContext);

  const showMobilemenu = () => {
    if (typeof window !== "undefined") {
      document?.getElementById("sidebarArea")?.classList.toggle("showSidebar");
    }
  };

  const handleStartTour = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("demo-done");
      tour?.start();
    }
  };

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Link
          href={"/"}
          className="nav-link border py-2 px-4 bg-dark text-white"
        >
          App LOGO
        </Link>
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg" id={navi.id}>
              <Link
                href={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button color="primary" onClick={handleStartTour} className="mt-4">
            Start tour
          </Button>
        </Nav>
      </div>
    </div>
  );
};
