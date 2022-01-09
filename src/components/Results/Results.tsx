import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, NotFound } from "./Results.styles";
import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import image from "../../assets/images/image.png";

import { Card } from "components";

import CompanyContext from "context";

type CompanyType = {
  nome: string;
  cnpj: string;
  logradouro: string;
};

const Results: React.FC = () => {
  const { state } = useContext(CompanyContext);
  const [position, setPosition] = useState(0);
  const [style, setStyle] = useState({
    left: {
      color: "darkgrey",
      opacity: 0.5,
    },
    right: {
      color: "white",
      opacity: 1,
    },
  });
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("company") || "[]");
    setCompanies(storage.reverse());
  }, [state]);

  useEffect(() => {
    const maxLimit = Math.ceil(companies.length / 4) - 1;
    if (position === 0) {
      setStyle({
        left: {
          color: "darkgrey",
          opacity: 0.5,
        },
        right: {
          color: "white",
          opacity: 1,
        },
      });
    } else if (position > 0 && position < maxLimit) {
      setStyle({
        left: {
          color: "white",
          opacity: 1,
        },
        right: {
          color: "white",
          opacity: 1,
        },
      });
    } else if (position > 0 && position < maxLimit) {
      setStyle({
        left: {
          color: "white",
          opacity: 1,
        },
        right: {
          color: "white",
          opacity: 1,
        },
      });
    } else if (position === maxLimit) {
      setStyle({
        left: {
          color: "white",
          opacity: 1,
        },
        right: {
          color: "darkgrey",
          opacity: 0.5,
        },
      });
    }
  }, [companies, position]);

  const navigateLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const navigateRight = () => {
    const maxLimit = Math.ceil(companies.length / 4) - 1;
    if (position < maxLimit) {
      setPosition(position + 1);
    }
  };

  return (
    <>
      {companies.length > 0 ? (
        <Wrapper>
          <Link to="#">
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="2x"
              color={style.left.color}
              opacity={style.left.opacity}
              onClick={navigateLeft}
            />
          </Link>
          {companies.map((company: CompanyType, index: number) => {
            if (index >= position * 4 && index < position * 4 + 4) {
              return (
                <Card
                  key={index}
                  razao_social={company.nome}
                  cnpj={company.cnpj}
                  logradouro={company.logradouro}
                />
              );
            } else {
              return null;
            }
          })}
          <Link to="#">
            <FontAwesomeIcon
              icon={faChevronRight}
              size="2x"
              color={style.right.color}
              opacity={style.right.opacity}
              onClick={navigateRight}
            />
          </Link>
        </Wrapper>
      ) : (
        <NotFound>
          <img src={image} alt="Sem histórico" />
          <Typography variant="h3">
            Localize acima a primeira empresa
          </Typography>
        </NotFound>
      )}
    </>
  );
};

export { Results };
