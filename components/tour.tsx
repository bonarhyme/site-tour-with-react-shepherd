import { useRouter } from "next/router";
import { PropsWithChildren, useContext, useEffect, useMemo } from "react";
import {
  ShepherdOptionsWithType,
  ShepherdTour,
  ShepherdTourContext,
} from "react-shepherd";
import "shepherd.js/dist/css/shepherd.css";

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
  },
  useModalOverlay: true,
};

const TourInstance: React.FC<PropsWithChildren> = ({ children }) => {
  const tour = useContext(ShepherdTourContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const demoDone = localStorage.getItem("demo-done")
        ? JSON.parse(localStorage.getItem("demo-done") || "")
        : null;

      if (demoDone) return;

      tour?.start();
    }
  }, [tour]);

  return <>{children}</>;
};

const Tour: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const newSteps: ShepherdOptionsWithType[] = useMemo(() => {
    return [
      {
        id: "first",
        title: "Welcome to App Dashboard",
        text: [
          "Let us take you on a journey to explore the most important features of our site",
        ],
        scrollTo: false,
        arrow: false,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],
      },
      {
        id: "second",
        title: "App navigation bar",
        text: ["Explore how you can easily navigate through the app"],
        attachTo: { element: "#navigation", on: "bottom" },
        scrollTo: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Back",
            type: "back",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],
      },
      {
        id: "third",
        title: "Navigate to the dashboard",
        text: ["Click here to quickly navigate to the dashboard index"],
        attachTo: { element: "#nav-dashboard", on: "bottom" },
        scrollTo: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Back",
            type: "back",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],
      },
      {
        id: "fourth",
        title: "Navigate to about page",
        text: ["Click here to quickly navigate to the about page"],
        attachTo: { element: "#nav-about", on: "bottom" },
        scrollTo: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Back",
            type: "back",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],
      },
      {
        id: "fifth",
        title: "Open extra menu options",
        text: ["Click here to open extra menu options"],
        attachTo: { element: "#nav-menu", on: "right" },
        scrollTo: true,
        canClickTarget: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Back",
            type: "back",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],

        when: {
          show: () => {
            document.getElementById("nav-menu")?.click();
          },
          hide: () => {},
        },
      },
      {
        id: "sixth",
        title: "Open profile options",
        text: ["Click here to open profile options"],
        attachTo: { element: "#nav-profile", on: "left" },
        canClickTarget: true,
        scrollTo: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Back",
            type: "back",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],
        when: {
          show: () => {
            document.getElementById("nav-profile")?.click();
          },
          hide: () => {
            console.log("hide step");
          },
        },
      },
      {
        id: "seventh",
        title: "Sales overview",
        text: ["Graph that contains visual details about the sales prohgress"],
        attachTo: { element: "#sales-chart", on: "bottom" },
        scrollTo: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Back",
            type: "back",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],
      },
      {
        id: "eigth",
        title: "Quickly find out what's going on",
        text: ["Updates on what is going on..."],
        attachTo: { element: "#feed", on: "left" },
        scrollTo: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Back",
            type: "back",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],
      },
      {
        id: "ninth",
        title: "Overview of projects listings",
        text: ["Summary of projects carried out"],
        attachTo: { element: "#projects-listing", on: "top" },
        scrollTo: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Back",
            type: "back",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],
      },
      {
        id: "tenth",
        title: "View most recent blog posts",
        text: ["View most recent blog posts at a glance"],
        attachTo: { element: "#blogs", on: "top" },
        scrollTo: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Exit",
            type: "cancel",
          },
          {
            classes: "shepherd-button-primary",
            text: "Back",
            type: "back",
          },
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
          },
        ],
      },
      {
        id: "eleventh",
        title: "Navigate to any page from here",
        text: ["Navigate to the appropriate page by clicking on any"],
        attachTo: { element: "#sidemenu-about", on: "top" },
        scrollTo: true,
        canClickTarget: true,
        buttons: [
          {
            classes: "shepherd-button-secondary",
            text: "Restart",
            action() {
              this.cancel();
              router.push("/dashboard");
              this.start();
            },
          },
          {
            classes: "shepherd-button-primary",
            text: "Done",
            type: "cancel",
          },
        ],
        when: {
          show: () => {
            document.getElementById("sidemenu-about")?.click();
            localStorage.setItem("demo-done", JSON.stringify(true));
          },
          hide: () => {},
        },
        beforeShowPromise: function () {
          return new Promise(function (resolve: any) {
            setTimeout(function () {
              router.push("/about");
              resolve();
            }, 200);
          });
        },
      },
    ];
  }, []);
  return (
    <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
      <TourInstance>{children}</TourInstance>
    </ShepherdTour>
  );
};

export default Tour;
