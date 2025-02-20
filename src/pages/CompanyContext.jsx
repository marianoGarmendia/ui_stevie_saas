"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
// import { useToast } from "../components/ui/use-toast";

export default function CompanyContext() {
  //   const { toast } = useToast();
  const [formData, setFormData] = useState({
    legalName: "",
    commercialName: "",
    foundationDate: "",
    physicalAddress: "",
    website: "",
    phoneNumber: "",
    email: "",
    mission: "",
    vision: "",
    corporateValues: "",
    productsServices: "",
    history: "",
    achievements: "",
    targetMarket: "",
    competitionAnalysis: "",
    marketShare: "",
    strengths: "",
    avoidMentioning: "",
    geographicScope: "",
    distributionChannels: "",
    companyCulture: "",
    hrPolicies: "",
    shortTermGoals: "",
    longTermGoals: "",
    expansionPlans: "",
    customerTestimonials: "",
    successStories: "",
    certifications: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/company-context", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit company context");
      }

      //   toast({
      //     title: "Success",
      //     description: "Company context has been successfully submitted.",
      //   });
    } catch (error) {
      console.error("Submission error:", error);
      //   toast({
      //     title: "Error",
      //     description: "Failed to submit company context. Please try again.",
      //     variant: "destructive",
      //   });
    }
  };

  const renderField = (name, label, description, type = "text") => (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-base font-semibold">
        {label}
      </Label>
      <p className="text-sm text-muted-foreground">{description}</p>
      {type === "textarea" ? (
        <Textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className="w-full"
        />
      ) : (
        <Input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className="w-full"
        />
      )}
    </div>
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Company Context</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>1. Información General de la Empresa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderField(
              "legalName",
              "Nombre Legal de la Empresa",
              "Nombre oficial registrado de la organización."
            )}
            {renderField(
              "commercialName",
              "Nombre Comercial",
              "Si difiere del nombre legal."
            )}
            {renderField(
              "foundationDate",
              "Fecha de Fundación",
              "Año y, si es posible, fecha exacta de establecimiento.",
              "date"
            )}
            {renderField(
              "physicalAddress",
              "Dirección Física",
              "Ubicación principal de las oficinas o instalaciones."
            )}
            {renderField(
              "website",
              "Sitio Web Oficial",
              "URL del sitio web corporativo.",
              "url"
            )}
            {renderField(
              "phoneNumber",
              "Número de Teléfono de Contacto",
              "Línea principal de atención.",
              "tel"
            )}
            {renderField(
              "email",
              "Correo Electrónico de Contacto",
              "Dirección de correo para comunicaciones oficiales.",
              "email"
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Descripción y Propósito</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderField(
              "mission",
              "Misión de la Empresa",
              "Declaración que refleja el propósito y razón de ser de la organización.",
              "textarea"
            )}
            {renderField(
              "vision",
              "Visión de la Empresa",
              "Perspectiva futura y objetivos a largo plazo.",
              "textarea"
            )}
            {renderField(
              "corporateValues",
              "Valores Corporativos",
              "Principios y creencias fundamentales que guían las acciones de la empresa.",
              "textarea"
            )}
            {renderField(
              "productsServices",
              "Descripción de Productos o Servicios",
              "Detalle de las principales ofertas comerciales.",
              "textarea"
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Historia y Desarrollo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderField(
              "history",
              "Reseña Histórica",
              "Resumen de los hitos y evolución de la empresa desde su fundación.",
              "textarea"
            )}
            {renderField(
              "achievements",
              "Logros Destacados",
              "Premios, reconocimientos o metas significativas alcanzadas.",
              "textarea"
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Mercado y Competencia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderField(
              "targetMarket",
              "Segmento de Mercado Objetivo",
              "Descripción del público o clientes a los que se dirige la empresa.",
              "textarea"
            )}
            {renderField(
              "competitionAnalysis",
              "Análisis de la Competencia",
              "Identificación de principales competidores y diferenciadores clave.",
              "textarea"
            )}
            {renderField(
              "marketShare",
              "Participación de Mercado",
              "Cuota o posición que ocupa la empresa en su sector."
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Fortalezas y Áreas de Mejora</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderField(
              "strengths",
              "Puntos Fuertes",
              "Ventajas competitivas y aspectos en los que la empresa sobresale.",
              "textarea"
            )}
            {renderField(
              "avoidMentioning",
              "Aspectos a Evitar Mencionar",
              "Debilidades o áreas sensibles que la empresa prefiere no destacar públicamente.",
              "textarea"
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Presencia en el Mercado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderField(
              "geographicScope",
              "Ámbito Geográfico de Operación",
              "Regiones o países donde la empresa tiene presencia.",
              "textarea"
            )}
            {renderField(
              "distributionChannels",
              "Canales de Distribución",
              "Medios a través de los cuales los productos o servicios llegan al cliente.",
              "textarea"
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Políticas Internas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderField(
              "companyCulture",
              "Cultura Empresarial",
              "Descripción del ambiente laboral y valores promovidos internamente.",
              "textarea"
            )}
            {renderField(
              "hrPolicies",
              "Políticas de Recursos Humanos",
              "Enfoques en contratación, capacitación y retención de talento.",
              "textarea"
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Proyecciones Futuras</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderField(
              "shortTermGoals",
              "Metas a Corto Plazo",
              "Objetivos específicos que la empresa busca alcanzar en el corto plazo.",
              "textarea"
            )}
            {renderField(
              "longTermGoals",
              "Metas a Largo Plazo",
              "Objetivos específicos que la empresa busca alcanzar en el largo plazo.",
              "textarea"
            )}
            {renderField(
              "expansionPlans",
              "Planes de Expansión",
              "Estrategias para crecer en nuevos mercados o segmentos.",
              "textarea"
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Información Adicional</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {renderField(
              "customerTestimonials",
              "Testimonios de Clientes",
              "Opiniones o reseñas destacadas de clientes satisfechos.",
              "textarea"
            )}
            {renderField(
              "successStories",
              "Casos de Éxito",
              "Ejemplos concretos de proyectos o contratos exitosos.",
              "textarea"
            )}
            {renderField(
              "certifications",
              "Certificaciones y Acreditaciones",
              "Reconocimientos oficiales que respaldan la calidad o cumplimiento de estándares.",
              "textarea"
            )}
          </CardContent>
        </Card>

        <Button type="submit" className="w-full">
          Cargar Información de la Empresa
        </Button>
      </form>
    </div>
  );
}
