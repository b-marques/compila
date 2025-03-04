/*
 *  @file Shape.js
 *
 *  @author Bruno Marques do Nascimento
 *  @date 23/04/2019
 *  @version 1.0
 */

import Lexical from "./logic/lexical";
import Synctatic from "./logic/syntactic";
import SyntacticExpsDec from "./logic/syntacticExpsDec";
// import Grammar from "./logic/Grammar";

export const initial_shape = {
  analyserReducer: {
    lexical: new Lexical(
      ""
    ) /*`class bintree{
  
  class data{
    int dia, mes, ano;
    
    constructor(){
      ano = 1900;
      mes = 1;
      dia = 1;
    }

    constructor(int d, int m, int a){
      dia = d;
      mes = m;
      ano = a;
    }

    int compara(data x){
      if (ano < x.ano) 
        then return -1;
      if (ano > x.ano)
        then return 1;
      if (mes < x.mes)
        then return -1;
      if (mes > x.mes)
        then return 1;
      if (dia < x.dia)
        then return -1;
      if (dia > x.dia)
        then return 1;
    }

  }

  data key;
  bintree left, right;

  constructor(data x){
    key = x
    left = null;
    right = nul;
  }

  int insert(data k){
    int x;
    x = k.compara(key);
    if (x < 0) then {
      if (left != null){
        then return left.insert(k);
      left = new bintree(k);
      return 1;
    }
    if (x > 0) then {
      if (right != null){
        then return right.insert(k);
      right = new bintree(k);
      return 1;
    }
    return 0;
  }

  int treeprint(int x){
    int i;
    if (left != null)
      then i = left.treeprint(x+4);
    for (i = 0; i < x; i = i + 1)
      print " ";
    print key.dia + "/" + key.mes + "/" + key.ano + "\\n";
    if (right != null)
      then i = right.treeprint(x+4)
  }

  int start(){
    bintree t;
    int i, d, m, a;
    data w;
    print "Digite o dia: ";
    read d;
    print "Digite o mes: ";
    read m;
    print "Digite o ano: ";
    read a;
    
    w = new data (d, m, a);
    t = new bintree(w);

    for (i = 0; i < 10; i = i + 1) {
      print "Digite o dia: ";
      read d;
      print "Digite o mes: ";
      read m;
      print "Digite o ano: ";
      read a;
   
      w = new data (d, m, a);
      if (t.insert(w) == 0)
        then print "Elemento já existe\\n";
    }
    i = t.treeprint(0);
    return 0;
  }
}`),*/,
    syntactic: new Synctatic(),
    syntacticExpsDec: new SyntacticExpsDec()
  }
};
