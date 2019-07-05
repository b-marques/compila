// Generated from stat.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by statParser.

function statVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

statVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
statVisitor.prototype.constructor = statVisitor;

// Visit a parse tree produced by statParser#statement.
statVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#varoratrib.
statVisitor.prototype.visitVaroratrib = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#atribstat.
statVisitor.prototype.visitAtribstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#atribstatb.
statVisitor.prototype.visitAtribstatb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#printstat.
statVisitor.prototype.visitPrintstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#readstat.
statVisitor.prototype.visitReadstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#returnstat.
statVisitor.prototype.visitReturnstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#returnstatb.
statVisitor.prototype.visitReturnstatb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#superstat.
statVisitor.prototype.visitSuperstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#ifstat.
statVisitor.prototype.visitIfstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#forstat.
statVisitor.prototype.visitForstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#statlist.
statVisitor.prototype.visitStatlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#statlistb.
statVisitor.prototype.visitStatlistb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#numexpression.
statVisitor.prototype.visitNumexpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#terms.
statVisitor.prototype.visitTerms = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#term.
statVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#unaryexprs.
statVisitor.prototype.visitUnaryexprs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#unaryexpr.
statVisitor.prototype.visitUnaryexpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#factor.
statVisitor.prototype.visitFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#lvalue.
statVisitor.prototype.visitLvalue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#lvalueb.
statVisitor.prototype.visitLvalueb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#brackets.
statVisitor.prototype.visitBrackets = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#multivardecl.
statVisitor.prototype.visitMultivardecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by statParser#vardeclcomma.
statVisitor.prototype.visitVardeclcomma = function(ctx) {
  return this.visitChildren(ctx);
};



exports.statVisitor = statVisitor;