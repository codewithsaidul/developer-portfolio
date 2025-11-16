"use client"
import { engineeringPillars } from "@/constants/constants";
import { Card } from "../ui/card";


import React from "react";

interface IEngineeringProps {
    headingRef: React.RefObject<HTMLDivElement | null>;
    cardsRef: React.RefObject<HTMLDivElement | null>;
}

export default function EngineeringPillars({ headingRef, cardsRef }: IEngineeringProps) {
  return (
    <div className="space-y-8">
      <div ref={headingRef} className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Core Competencies</h3>
        <p className="text-muted-foreground">
          Key areas of expertise that drive my development process
        </p>
      </div>

      <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {engineeringPillars.map((skill) => (
          <Card
            key={skill.name}
            className="p-6 text-center hover-lift border border-border/50"
          >
            <div className="space-y-4">
              <skill.icon className={`h-8 w-8 mx-auto ${skill.color}`} />
              <h4 className="font-semibold">{skill.name}</h4>
              <p>{skill.des}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
