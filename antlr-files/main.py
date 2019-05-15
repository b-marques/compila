from antlr4 import *
from xppLexer import xppLexer
from xppListener import xppListener
from xppParser import xppParser
import sys

class xppPrintListener(xppListener):
    def enterProgram(self, ctx):
        print("Program:")

def main():
    script, filename = sys.argv
    lexer = xppLexer(FileStream(filename, encoding='utf-8'))
    stream = CommonTokenStream(lexer)
    parser = xppParser(stream)
    tree = parser.program()
    printer = xppPrintListener()
    walker = ParseTreeWalker()
    walker.walk(printer, tree)

if __name__ == '__main__':
    main()