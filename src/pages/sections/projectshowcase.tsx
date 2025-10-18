import PreviewCard from "../components/Preview-Card";

export default function experience() {

  return (
    <div className="flex space-x-4">
      {/* This is the showcase of the projects that I will be looking to show off */}
      {/* Will Soon systematically read in these values from Resume */}
      
      <PreviewCard
        title="MBTA SDK"
        description="A middleware implementation the MBTA API to assist with writing applications interacting with Data around the MBTA T system"
        repoLink="https://github.com/Luke-Jodice/MBTA-SDK"
        technologies={["Javascript | API Endpoints | Integration Tool"]}
      />
      <PreviewCard
        title="My IDP"
        description="A personal implementation of a real world IDP to be used to stand up my own IDP for testing of setting up SSO Enviorments and the use of SCIM APIs"
        repoLink="https://github.com/Luke-Jodice/My-idp"
        technologies={["Javascript | Identity Provider Tool | SSO/SCIM "]}
      />
     
    </div>
  );
}
