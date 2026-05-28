/* CAMISAS */

import basicaBranca from "../assets/camisas/basica-branca.png"
import basicaEscuro from "../assets/camisas/basica-escuro.png"
import basicaVerde from "../assets/camisas/basica-verde.png"

import poloTerracota from "../assets/camisas/polo-terracota.png"
import poloOffwhite from "../assets/camisas/polo-offwhite.png"
import poloPreta from "../assets/camisas/polo-preta.png"

import golaPadreAzul from "../assets/camisas/golapadre-azul.png"
import golaPadreVerde from "../assets/camisas/golapadre-verde.png"
import golaPadreOffwhite from "../assets/camisas/golapadreoffwhite.png"

import camisaoLinhoOffwhite from "../assets/camisas/camisao-linho-offwhite.png"
import camisaoLinhoPreta from "../assets/camisas/camisao-linho-preta.png"
import camisaoLinhoTerracota from "../assets/camisas/camisao-linho-terracota.png"
import camisaoLinhoVerde from "../assets/camisas/camisao-linho-verde.png"

import camisaLinhoAzul from "../assets/camisas/camisa-linho-azul.png"
import camisaLinhoTerracota from "../assets/camisas/camisa-linho-terracota.png"
import camisaLinhoPreta from "../assets/camisas/camisa-linho-preta.png"

/* CASACOS */

import casacoLinhoAzul from "../assets/casacos/linho-azul.png"
import casacoLinhoOffwhite from "../assets/casacos/linho-offwhite.png"
import casacoLinhoVerde from "../assets/casacos/linho-verde.png"
import casacoLinhoTerracota from "../assets/casacos/linho-terracota.png"

import sobretudoBege from "../assets/casacos/sobretudo.png"
import sobretudoPreto from "../assets/casacos/sobretudo-preto.png"
import sobretudoOff from "../assets/casacos/sobretudo-off.png"

import jaquetaPreta from "../assets/casacos/jaqueta-preta.png"
import jaquetaTerracota from "../assets/casacos/jaqueta-terracota.png"
import jaquetaVerde from "../assets/casacos/jaqueta-verde.png"

import moletomBranco from "../assets/casacos/moletom-branco.png"
import moletomAzul from "../assets/casacos/moletom-azul.png"
import moletomPreto from "../assets/casacos/moletom-preto.png"


/* SHORTS */

import shortLinhoPreto from "../assets/shorts/linho-preto.png"
import shortLinhoBranco from "../assets/shorts/linho-branco.png"
import shortLinhoAzul from "../assets/shorts/linho-azul.png"
import shortLinhoVerde from "../assets/shorts/linho-verde.png"
import shortLinhoTerracota from "../assets/shorts/linho-terracota.png"
import shortLinhoDourado from "../assets/shorts/linho-dourado.png"

/* CALCAS */

import calcaLinhoOffwhite from "../assets/calcas/linho-offwhite.png"
import calcaLinhoPreto from "../assets/calcas/linho-preto.png"
import calcaLinhoVerde from "../assets/calcas/linho-verde.png"
import calcaLinhoTerracota from "../assets/calcas/linho-terracota.png"
import calcaLinhoAzul from "../assets/calcas/linho-azul.png"

import alfaiatariaBranco from "../assets/calcas/alfaitaria-branco.png"
import alfaiatariaPreta from "../assets/calcas/alfaitaria-preta.png"

/* ACESSORIOS */

import oculosChampagne from "../assets/acessorios/oculos-champagne.png"
import oculosPreto from "../assets/acessorios/oculos-preto.png"
import oculosMarrom from "../assets/acessorios/oculos-marrom.png"
import oculosTransparente from "../assets/acessorios/oculos-transparente.png"

import bonePreto from "../assets/acessorios/bone-preto.png"
import boneOff from "../assets/acessorios/bone-off.png"
import boneTerracota from "../assets/acessorios/bone-terracota.png"
import boneVerde from "../assets/acessorios/bone-verde.png"
import boneAzul from "../assets/acessorios/bone-azul.png"

import relogioPreto from "../assets/acessorios/relogio-preto.png"
import relogioMarrom from "../assets/acessorios/relogio-marrom.png"
import relogioPrata from "../assets/acessorios/relogio-prata.png"

import correntePrata from "../assets/acessorios/corrente-prata.png"
import correnteOuro from "../assets/acessorios/corrente-ouro.png"

import pulseiraOuro from "../assets/acessorios/pulseira-ouro.png"
import pulseiraPrata from "../assets/acessorios/pulseira-prata.png"

/* TAMANHOS */

const defaultSizes = ["P", "M", "G", "GG"]

/* CAMISAS */

export const shirts = [
  {
    id: 1,
    image: basicaBranca,
    name: "Camiseta Básica",
    color: "Branca",
    price: "189,00",
    sizes: defaultSizes,
  },

  {
    id: 2,
    image: basicaEscuro,
    name: "Camiseta Básica",
    color: "Azul Escuro",
    price: "189,00",
    sizes: ["M", "G", "GG"],
  },

  {
    id: 3,
    image: basicaVerde,
    name: "Camiseta Básica",
    color: "Verde Militar",
    price: "189,00",
    sizes: defaultSizes,
  },

  {
    id: 4,
    image: poloTerracota,
    name: "Camisa Polo",
    color: "Terracota",
    price: "500,00",
    sizes: defaultSizes,
  },

  {
    id: 5,
    image: poloOffwhite,
    name: "Camisa Polo",
    color: "Off White",
    price: "500,00",
    sizes: defaultSizes,
  },

  {
    id: 6,
    image: poloPreta,
    name: "Camisa Polo",
    color: "Preta",
    price: "500,00",
    sizes: defaultSizes,
  },

  {
    id: 7,
    image: golaPadreAzul,
    name: "Gola Padre",
    color: "Azul Marinho",
    price: "420,00",
    sizes: defaultSizes,
  },

  {
    id: 8,
    image: golaPadreVerde,
    name: "Gola Padre",
    color: "Verde Militar",
    price: "410,00",
    sizes: defaultSizes,
  },

  {
    id: 9,
    image: golaPadreOffwhite,
    name: "Gola Padre",
    color: "Off White",
    price: "410,00",
    sizes: defaultSizes,
  },

  {
    id: 10,
    image: camisaoLinhoOffwhite,
    name: "Camisão Linho",
    color: "Off White",
    price: "430,00",
    sizes: defaultSizes,
  },

  {
    id: 11,
    image: camisaoLinhoPreta,
    name: "Camisão Linho",
    color: "Preta",
    price: "450,00",
    sizes: defaultSizes,
  },

  {
    id: 12,
    image: camisaoLinhoTerracota,
    name: "Camisão Linho",
    color: "Terracota",
    price: "430,00",
    sizes: defaultSizes,
  },

  {
    id: 13,
    image: camisaoLinhoVerde,
    name: "Camisão Linho",
    color: "Verde Militar",
    price: "430,00",
    sizes: defaultSizes,
  },

  {
    id: 14,
    image: camisaLinhoAzul,
    name: "Camisa Linho",
    color: "Azul Marinho",
    price: "390,00",
    sizes: defaultSizes,
  },

  {
    id: 15,
    image: camisaLinhoTerracota,
    name: "Camisa Linho",
    color: "Terracota",
    price: "390,00",
    sizes: defaultSizes,
  },

  {
    id: 16,
    image: camisaLinhoPreta,
    name: "Camisa Linho",
    color: "Preta",
    price: "390,00",
    sizes: defaultSizes,
  },
]

/* CASACOS */

export const jackets = [
  {
    id: 17,
    image: casacoLinhoAzul,
    name: "Casaco Linho",
    color: "Azul Marinho",
    price: "690,00",
    sizes: defaultSizes,
  },

  {
    id: 18,
    image: casacoLinhoOffwhite,
    name: "Casaco Linho",
    color: "Off White",
    price: "690,00",
    sizes: defaultSizes,
  },

  {
    id: 19,
    image: casacoLinhoVerde,
    name: "Casaco Linho",
    color: "Verde Militar",
    price: "690,00",
    sizes: defaultSizes,
  },

  {
    id: 20,
    image: casacoLinhoTerracota,
    name: "Casaco Linho",
    color: "Terracota",
    price: "720,00",
    sizes: defaultSizes,
  },

  {
    id: 21,
    image: sobretudoBege,
    name: "Sobretudo Premium",
    color: "Bege",
    price: "980,00",
    sizes: defaultSizes,
  },

  {
    id: 22,
    image: sobretudoPreto,
    name: "Sobretudo Premium",
    color: "Preto",
    price: "980,00",
    sizes: defaultSizes,
  },

  {
    id: 23,
    image: sobretudoOff,
    name: "Sobretudo Premium",
    color: "Off White",
    price: "980,00",
    sizes: defaultSizes,
  },

  {
    id: 24,
    image: jaquetaPreta,
    name: "Jaqueta Essential",
    color: "Preta",
    price: "590,00",
    sizes: defaultSizes,
  },

  {
    id: 25,
    image: jaquetaTerracota,
    name: "Jaqueta Essential",
    color: "Terracota",
    price: "590,00",
    sizes: defaultSizes,
  },

  {
    id: 26,
    image: jaquetaVerde,
    name: "Jaqueta Essential",
    color: "Verde Militar",
    price: "590,00",
    sizes: defaultSizes,
  },

  {
    id: 27,
    image: moletomBranco,
    name: "Moletom Premium",
    color: "Branco",
    price: "420,00",
    sizes: defaultSizes,
  },

  {
    id: 28,
    image: moletomAzul,
    name: "Moletom Premium",
    color: "Azul Marinho",
    price: "420,00",
    sizes: defaultSizes,
  },

  {
    id: 29,
    image: moletomPreto,
    name: "Moletom Premium",
    color: "Preto",
    price: "420,00",
    sizes: defaultSizes,
  },
]

/* SHORTS */

export const shorts = [
  {
    id: 30,
    image: shortLinhoPreto,
    name: "Short Linho",
    color: "Preto",
    price: "320,00",
    sizes: defaultSizes,
  },

  {
    id: 31,
    image: shortLinhoBranco,
    name: "Short Linho",
    color: "Branco",
    price: "320,00",
    sizes: defaultSizes,
  },

  {
    id: 32,
    image: shortLinhoAzul,
    name: "Short Linho",
    color: "Azul Marinho",
    price: "320,00",
    sizes: defaultSizes,
  },

  {
    id: 33,
    image: shortLinhoVerde,
    name: "Short Linho",
    color: "Verde Militar",
    price: "320,00",
    sizes: defaultSizes,
  },

  {
    id: 34,
    image: shortLinhoTerracota,
    name: "Short Linho",
    color: "Terracota",
    price: "320,00",
    sizes: defaultSizes,
  },

  {
    id: 35,
    image: shortLinhoDourado,
    name: "Short Linho",
    color: "Areia",
    price: "320,00",
    sizes: defaultSizes,
  },
]

/* CALCAS */

export const pants = [
  {
    id: 36,
    image: calcaLinhoOffwhite,
    name: "Calça Linho",
    color: "Off White",
    price: "520,00",
    sizes: defaultSizes,
  },

  {
    id: 37,
    image: calcaLinhoPreto,
    name: "Calça Linho",
    color: "Preta",
    price: "520,00",
    sizes: defaultSizes,
  },

  {
    id: 38,
    image: calcaLinhoVerde,
    name: "Calça Linho",
    color: "Verde Militar",
    price: "520,00",
    sizes: defaultSizes,
  },

  {
    id: 39,
    image: calcaLinhoTerracota,
    name: "Calça Linho",
    color: "Terracota",
    price: "520,00",
    sizes: defaultSizes,
  },

  {
    id: 40,
    image: calcaLinhoAzul,
    name: "Calça Linho",
    color: "Azul Marinho",
    price: "520,00",
    sizes: defaultSizes,
  },

  {
    id: 41,
    image: alfaiatariaBranco,
    name: "Calça Alfaiataria",
    color: "Branca",
    price: "690,00",
    sizes: defaultSizes,
  },

  {
    id: 42,
    image: alfaiatariaPreta,
    name: "Calça Alfaiataria",
    color: "Preta",
    price: "690,00",
    sizes: defaultSizes,
  },
]

/* ACESSORIOS */

export const accessories = [
  {
    id: 43,
    image: oculosChampagne,
    name: "Óculos Premium",
    color: "Champagne",
    price: "420,00",
  },

  {
    id: 44,
    image: oculosPreto,
    name: "Óculos Premium",
    color: "Preto",
    price: "420,00",
  },

  {
    id: 45,
    image: oculosMarrom,
    name: "Óculos Premium",
    color: "Marrom",
    price: "420,00",
  },

  {
    id: 46,
    image: oculosTransparente,
    name: "Óculos Premium",
    color: "Transparente",
    price: "420,00",
  },

  {
    id: 47,
    image: bonePreto,
    name: "Boné Essential",
    color: "Preto",
    price: "220,00",
  },

  {
    id: 48,
    image: boneOff,
    name: "Boné Essential",
    color: "Off White",
    price: "220,00",
  },

  {
    id: 49,
    image: boneTerracota,
    name: "Boné Essential",
    color: "Terracota",
    price: "220,00",
  },

  {
    id: 50,
    image: boneVerde,
    name: "Boné Essential",
    color: "Verde Militar",
    price: "220,00",
  },

  {
    id: 51,
    image: boneAzul,
    name: "Boné Essential",
    color: "Azul Marinho",
    price: "220,00",
  },

  {
    id: 52,
    image: relogioPreto,
    name: "Relógio Minimal",
    color: "Preto",
    price: "890,00",
  },

  {
    id: 53,
    image: relogioMarrom,
    name: "Relógio Minimal",
    color: "Marrom",
    price: "890,00",
  },

  {
    id: 54,
    image: relogioPrata,
    name: "Relógio Minimal",
    color: "Prata",
    price: "890,00",
  },

  {
    id: 55,
    image: correntePrata,
    name: "Corrente Premium",
    color: "Prata",
    price: "320,00",
  },

  {
    id: 56,
    image: correnteOuro,
    name: "Corrente Premium",
    color: "Ouro",
    price: "320,00",
  },

  {
    id: 57,
    image: pulseiraOuro,
    name: "Pulseira Premium",
    color: "Ouro",
    price: "280,00",
  },

  {
    id: 58,
    image: pulseiraPrata,
    name: "Pulseira Premium",
    color: "Prata",
    price: "280,00",
  },
]