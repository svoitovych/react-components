import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "safddasc",
      label: "Can I use React on a project",
      content: "You can use Rect any project you want",
    },
    {
      id: "safddascds",
      label: "Can I use JS on a project",
      content: "You can use JS any project you want",
    },
    {
      id: "safddascfe",
      label: "Can I use CSS on a project",
      content: "You can use CSS any project you want",
    },
  ];

  return <Accordion items={items} />;
};

export default AccordionPage;
