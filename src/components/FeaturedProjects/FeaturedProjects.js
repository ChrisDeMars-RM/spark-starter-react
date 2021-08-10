import React from 'react';
import { SprkText, SprkHeading } from '@sparkdesignsystem/spark-react';

const FeaturedProjects = () => {
  return (
    <div className="featured-projects-wrapper">
      <section className="featured-projects-section">
        <SprkHeading element="h2" variant="displayTwo" idString="heading-two">
          Featured Projects
        </SprkHeading>
        <SprkText variant="bodyOne" idString="body-one">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
          urna quis nulla ultrices, sed efficitur risus elementum. Vivamus
          semper ex a lorem sodales, rhoncus rhoncus augue cursus. Sed
          vestibulum felis vel euismod aliquet. Suspendisse sit amet euismod
          nibh, eget fermentum arcu. Aliquam lacinia, sem eu ultricies auctor,
          velit nunc commodo sapien, pharetra maximus augue dui eget dui.
        </SprkText>
      </section>
    </div>
  );
};

export default FeaturedProjects;
