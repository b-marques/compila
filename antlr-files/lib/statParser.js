// Generated from stat.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var statListener = require('./statListener').statListener;
var statVisitor = require('./statVisitor').statVisitor;

var grammarFileName = "stat.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003,\u00f3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002V\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003b\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0005\tw\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u008c",
    "\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0005",
    "\u000e\u009d\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u00ab\n\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00bd\n\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00c4\n",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00cf\n\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u00d9\n\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00e0\n\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017",
    "\u00e7\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005",
    "\u0018\u00ed\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0002\u0002\u001a\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0\u0002\u0002\u0002\u00f9",
    "\u0002U\u0003\u0002\u0002\u0002\u0004a\u0003\u0002\u0002\u0002\u0006",
    "c\u0003\u0002\u0002\u0002\bh\u0003\u0002\u0002\u0002\nj\u0003\u0002",
    "\u0002\u0002\fm\u0003\u0002\u0002\u0002\u000eq\u0003\u0002\u0002\u0002",
    "\u0010v\u0003\u0002\u0002\u0002\u0012x\u0003\u0002\u0002\u0002\u0014",
    "\u008b\u0003\u0002\u0002\u0002\u0016\u008d\u0003\u0002\u0002\u0002\u0018",
    "\u0097\u0003\u0002\u0002\u0002\u001a\u009c\u0003\u0002\u0002\u0002\u001c",
    "\u009e\u0003\u0002\u0002\u0002\u001e\u00aa\u0003\u0002\u0002\u0002 ",
    "\u00ac\u0003\u0002\u0002\u0002\"\u00bc\u0003\u0002\u0002\u0002$\u00c3",
    "\u0003\u0002\u0002\u0002&\u00ce\u0003\u0002\u0002\u0002(\u00d8\u0003",
    "\u0002\u0002\u0002*\u00df\u0003\u0002\u0002\u0002,\u00e6\u0003\u0002",
    "\u0002\u0002.\u00ec\u0003\u0002\u0002\u00020\u00ee\u0003\u0002\u0002",
    "\u000223\u0007\u001b\u0002\u000234\u0007*\u0002\u000245\u0005,\u0017",
    "\u000256\u0005.\u0018\u000267\u0007\u000f\u0002\u00027V\u0003\u0002",
    "\u0002\u000289\u0007\u001c\u0002\u00029:\u0007*\u0002\u0002:;\u0005",
    ",\u0017\u0002;<\u0005.\u0018\u0002<=\u0007\u000f\u0002\u0002=V\u0003",
    "\u0002\u0002\u0002>?\u0007*\u0002\u0002?V\u0005\u0004\u0003\u0002@A",
    "\u0005\n\u0006\u0002AB\u0007\u000f\u0002\u0002BV\u0003\u0002\u0002\u0002",
    "CD\u0005\f\u0007\u0002DE\u0007\u000f\u0002\u0002EV\u0003\u0002\u0002",
    "\u0002FG\u0005\u000e\b\u0002GH\u0007\u000f\u0002\u0002HV\u0003\u0002",
    "\u0002\u0002IJ\u0005\u0012\n\u0002JK\u0007\u000f\u0002\u0002KV\u0003",
    "\u0002\u0002\u0002LV\u0005\u0014\u000b\u0002MV\u0005\u0016\f\u0002N",
    "O\u0007\b\u0002\u0002OP\u0005\u0018\r\u0002PQ\u0007\t\u0002\u0002QV",
    "\u0003\u0002\u0002\u0002RS\u0007\u001e\u0002\u0002SV\u0007\u000f\u0002",
    "\u0002TV\u0007\u000f\u0002\u0002U2\u0003\u0002\u0002\u0002U8\u0003\u0002",
    "\u0002\u0002U>\u0003\u0002\u0002\u0002U@\u0003\u0002\u0002\u0002UC\u0003",
    "\u0002\u0002\u0002UF\u0003\u0002\u0002\u0002UI\u0003\u0002\u0002\u0002",
    "UL\u0003\u0002\u0002\u0002UM\u0003\u0002\u0002\u0002UN\u0003\u0002\u0002",
    "\u0002UR\u0003\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002V\u0003\u0003",
    "\u0002\u0002\u0002WX\u0007*\u0002\u0002XY\u0005,\u0017\u0002YZ\u0005",
    ".\u0018\u0002Z[\u0007\u000f\u0002\u0002[b\u0003\u0002\u0002\u0002\\",
    "]\u0005(\u0015\u0002]^\u0007\u0018\u0002\u0002^_\u0005\b\u0005\u0002",
    "_`\u0007\u000f\u0002\u0002`b\u0003\u0002\u0002\u0002aW\u0003\u0002\u0002",
    "\u0002a\\\u0003\u0002\u0002\u0002b\u0005\u0003\u0002\u0002\u0002cd\u0007",
    "*\u0002\u0002de\u0005(\u0015\u0002ef\u0007\u0018\u0002\u0002fg\u0005",
    "\b\u0005\u0002g\u0007\u0003\u0002\u0002\u0002hi\u0005\u001c\u000f\u0002",
    "i\t\u0003\u0002\u0002\u0002jk\u0007\u001f\u0002\u0002kl\u0005\u001c",
    "\u000f\u0002l\u000b\u0003\u0002\u0002\u0002mn\u0007 \u0002\u0002no\u0007",
    "*\u0002\u0002op\u0005(\u0015\u0002p\r\u0003\u0002\u0002\u0002qr\u0007",
    "!\u0002\u0002rs\u0005\u0010\t\u0002s\u000f\u0003\u0002\u0002\u0002t",
    "w\u0005\u001c\u000f\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002",
    "\u0002vu\u0003\u0002\u0002\u0002w\u0011\u0003\u0002\u0002\u0002xy\u0007",
    "\"\u0002\u0002yz\u0007\u0004\u0002\u0002z{\u0007+\u0002\u0002{|\u0007",
    "\u0005\u0002\u0002|\u0013\u0003\u0002\u0002\u0002}~\u0007#\u0002\u0002",
    "~\u007f\u0007\u0004\u0002\u0002\u007f\u0080\u0005\u001c\u000f\u0002",
    "\u0080\u0081\u0007\u0005\u0002\u0002\u0081\u0082\u0005\u0002\u0002\u0002",
    "\u0082\u008c\u0003\u0002\u0002\u0002\u0083\u0084\u0007$\u0002\u0002",
    "\u0084\u0085\u0007\u0004\u0002\u0002\u0085\u0086\u0005\u001c\u000f\u0002",
    "\u0086\u0087\u0007\u0005\u0002\u0002\u0087\u0088\u0005\u0002\u0002\u0002",
    "\u0088\u0089\u0007%\u0002\u0002\u0089\u008a\u0005\u0002\u0002\u0002",
    "\u008a\u008c\u0003\u0002\u0002\u0002\u008b}\u0003\u0002\u0002\u0002",
    "\u008b\u0083\u0003\u0002\u0002\u0002\u008c\u0015\u0003\u0002\u0002\u0002",
    "\u008d\u008e\u0007\'\u0002\u0002\u008e\u008f\u0007\u0004\u0002\u0002",
    "\u008f\u0090\u0005\u0006\u0004\u0002\u0090\u0091\u0007\u000f\u0002\u0002",
    "\u0091\u0092\u0005\u001c\u000f\u0002\u0092\u0093\u0007\u000f\u0002\u0002",
    "\u0093\u0094\u0005\u0006\u0004\u0002\u0094\u0095\u0007\u0005\u0002\u0002",
    "\u0095\u0096\u0005\u0002\u0002\u0002\u0096\u0017\u0003\u0002\u0002\u0002",
    "\u0097\u0098\u0005\u0002\u0002\u0002\u0098\u0099\u0005\u001a\u000e\u0002",
    "\u0099\u0019\u0003\u0002\u0002\u0002\u009a\u009d\u0005\u0018\r\u0002",
    "\u009b\u009d\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u001b\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0005 \u0011\u0002\u009f\u00a0\u0005\u001e\u0010\u0002",
    "\u00a0\u001d\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\n\u0002\u0002",
    "\u00a2\u00a3\u0005 \u0011\u0002\u00a3\u00a4\u0005\u001e\u0010\u0002",
    "\u00a4\u00ab\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007\u000b\u0002\u0002",
    "\u00a6\u00a7\u0005 \u0011\u0002\u00a7\u00a8\u0005\u001e\u0010\u0002",
    "\u00a8\u00ab\u0003\u0002\u0002\u0002\u00a9\u00ab\u0003\u0002\u0002\u0002",
    "\u00aa\u00a1\u0003\u0002\u0002\u0002\u00aa\u00a5\u0003\u0002\u0002\u0002",
    "\u00aa\u00a9\u0003\u0002\u0002\u0002\u00ab\u001f\u0003\u0002\u0002\u0002",
    "\u00ac\u00ad\u0005$\u0013\u0002\u00ad\u00ae\u0005\"\u0012\u0002\u00ae",
    "!\u0003\u0002\u0002\u0002\u00af\u00b0\u0007\f\u0002\u0002\u00b0\u00b1",
    "\u0005$\u0013\u0002\u00b1\u00b2\u0005\"\u0012\u0002\u00b2\u00bd\u0003",
    "\u0002\u0002\u0002\u00b3\u00b4\u0007\r\u0002\u0002\u00b4\u00b5\u0005",
    "$\u0013\u0002\u00b5\u00b6\u0005\"\u0012\u0002\u00b6\u00bd\u0003\u0002",
    "\u0002\u0002\u00b7\u00b8\u0007\u000e\u0002\u0002\u00b8\u00b9\u0005$",
    "\u0013\u0002\u00b9\u00ba\u0005\"\u0012\u0002\u00ba\u00bd\u0003\u0002",
    "\u0002\u0002\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u00af\u0003\u0002",
    "\u0002\u0002\u00bc\u00b3\u0003\u0002\u0002\u0002\u00bc\u00b7\u0003\u0002",
    "\u0002\u0002\u00bc\u00bb\u0003\u0002\u0002\u0002\u00bd#\u0003\u0002",
    "\u0002\u0002\u00be\u00bf\u0007\n\u0002\u0002\u00bf\u00c4\u0005&\u0014",
    "\u0002\u00c0\u00c1\u0007\u000b\u0002\u0002\u00c1\u00c4\u0005&\u0014",
    "\u0002\u00c2\u00c4\u0005&\u0014\u0002\u00c3\u00be\u0003\u0002\u0002",
    "\u0002\u00c3\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c2\u0003\u0002\u0002",
    "\u0002\u00c4%\u0003\u0002\u0002\u0002\u00c5\u00cf\u0007+\u0002\u0002",
    "\u00c6\u00cf\u0007,\u0002\u0002\u00c7\u00cf\u0007)\u0002\u0002\u00c8",
    "\u00c9\u0007*\u0002\u0002\u00c9\u00cf\u0005(\u0015\u0002\u00ca\u00cb",
    "\u0007\u0004\u0002\u0002\u00cb\u00cc\u0005\u001c\u000f\u0002\u00cc\u00cd",
    "\u0007\u0005\u0002\u0002\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce\u00c5",
    "\u0003\u0002\u0002\u0002\u00ce\u00c6\u0003\u0002\u0002\u0002\u00ce\u00c7",
    "\u0003\u0002\u0002\u0002\u00ce\u00c8\u0003\u0002\u0002\u0002\u00ce\u00ca",
    "\u0003\u0002\u0002\u0002\u00cf\'\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0007\u0006\u0002\u0002\u00d1\u00d2\u0007+\u0002\u0002\u00d2\u00d3",
    "\u0007\u0007\u0002\u0002\u00d3\u00d9\u0005(\u0015\u0002\u00d4\u00d5",
    "\u0007\u0011\u0002\u0002\u00d5\u00d6\u0007*\u0002\u0002\u00d6\u00d9",
    "\u0005*\u0016\u0002\u00d7\u00d9\u0003\u0002\u0002\u0002\u00d8\u00d0",
    "\u0003\u0002\u0002\u0002\u00d8\u00d4\u0003\u0002\u0002\u0002\u00d8\u00d7",
    "\u0003\u0002\u0002\u0002\u00d9)\u0003\u0002\u0002\u0002\u00da\u00db",
    "\u0007\u0004\u0002\u0002\u00db\u00dc\u0007+\u0002\u0002\u00dc\u00dd",
    "\u0007\u0005\u0002\u0002\u00dd\u00e0\u0005(\u0015\u0002\u00de\u00e0",
    "\u0005(\u0015\u0002\u00df\u00da\u0003\u0002\u0002\u0002\u00df\u00de",
    "\u0003\u0002\u0002\u0002\u00e0+\u0003\u0002\u0002\u0002\u00e1\u00e2",
    "\u0007\u0006\u0002\u0002\u00e2\u00e3\u0007+\u0002\u0002\u00e3\u00e4",
    "\u0007\u0007\u0002\u0002\u00e4\u00e7\u0005,\u0017\u0002\u00e5\u00e7",
    "\u0003\u0002\u0002\u0002\u00e6\u00e1\u0003\u0002\u0002\u0002\u00e6\u00e5",
    "\u0003\u0002\u0002\u0002\u00e7-\u0003\u0002\u0002\u0002\u00e8\u00e9",
    "\u00050\u0019\u0002\u00e9\u00ea\u0005.\u0018\u0002\u00ea\u00ed\u0003",
    "\u0002\u0002\u0002\u00eb\u00ed\u0003\u0002\u0002\u0002\u00ec\u00e8\u0003",
    "\u0002\u0002\u0002\u00ec\u00eb\u0003\u0002\u0002\u0002\u00ed/\u0003",
    "\u0002\u0002\u0002\u00ee\u00ef\u0007\u0010\u0002\u0002\u00ef\u00f0\u0007",
    "*\u0002\u0002\u00f0\u00f1\u0005,\u0017\u0002\u00f11\u0003\u0002\u0002",
    "\u0002\u000fUav\u008b\u009c\u00aa\u00bc\u00c3\u00ce\u00d8\u00df\u00e6",
    "\u00ec"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'('", "')'", "'['", "']'", "'{'", "'}'", 
                     "'+'", "'-'", "'*'", "'/'", "'%'", "';'", "','", "'.'", 
                     "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", "'='", 
                     "'class'", "'extends'", "'int'", "'string'", "'constructor'", 
                     "'break'", "'print'", "'read'", "'return'", "'super'", 
                     "'if'", "'ife'", "'else'", "'method'", "'for'", "'new'", 
                     "'null'" ];

var symbolicNames = [ null, "WS", "LeftParen", "RightParen", "LeftBracket", 
                      "RightBracket", "LeftBrace", "RightBrace", "Plus", 
                      "Minus", "Star", "Div", "Mod", "Semi", "Comma", "Dot", 
                      "Less", "LessEqual", "Greater", "GreaterEqual", "Equal", 
                      "NotEqual", "Assign", "Class", "Extends", "Int", "String", 
                      "Constructor", "Break", "Print", "Read", "Return", 
                      "Super", "If", "Ife", "Else", "Method", "For", "New", 
                      "Null", "Identifier", "IntConstant", "StringConstant" ];

var ruleNames =  [ "statement", "varoratrib", "atribstat", "atribstatb", 
                   "printstat", "readstat", "returnstat", "returnstatb", 
                   "superstat", "ifstat", "forstat", "statlist", "statlistb", 
                   "numexpression", "terms", "term", "unaryexprs", "unaryexpr", 
                   "factor", "lvalue", "lvalueb", "brackets", "multivardecl", 
                   "vardeclcomma" ];

function statParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

statParser.prototype = Object.create(antlr4.Parser.prototype);
statParser.prototype.constructor = statParser;

Object.defineProperty(statParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

statParser.EOF = antlr4.Token.EOF;
statParser.WS = 1;
statParser.LeftParen = 2;
statParser.RightParen = 3;
statParser.LeftBracket = 4;
statParser.RightBracket = 5;
statParser.LeftBrace = 6;
statParser.RightBrace = 7;
statParser.Plus = 8;
statParser.Minus = 9;
statParser.Star = 10;
statParser.Div = 11;
statParser.Mod = 12;
statParser.Semi = 13;
statParser.Comma = 14;
statParser.Dot = 15;
statParser.Less = 16;
statParser.LessEqual = 17;
statParser.Greater = 18;
statParser.GreaterEqual = 19;
statParser.Equal = 20;
statParser.NotEqual = 21;
statParser.Assign = 22;
statParser.Class = 23;
statParser.Extends = 24;
statParser.Int = 25;
statParser.String = 26;
statParser.Constructor = 27;
statParser.Break = 28;
statParser.Print = 29;
statParser.Read = 30;
statParser.Return = 31;
statParser.Super = 32;
statParser.If = 33;
statParser.Ife = 34;
statParser.Else = 35;
statParser.Method = 36;
statParser.For = 37;
statParser.New = 38;
statParser.Null = 39;
statParser.Identifier = 40;
statParser.IntConstant = 41;
statParser.StringConstant = 42;

statParser.RULE_statement = 0;
statParser.RULE_varoratrib = 1;
statParser.RULE_atribstat = 2;
statParser.RULE_atribstatb = 3;
statParser.RULE_printstat = 4;
statParser.RULE_readstat = 5;
statParser.RULE_returnstat = 6;
statParser.RULE_returnstatb = 7;
statParser.RULE_superstat = 8;
statParser.RULE_ifstat = 9;
statParser.RULE_forstat = 10;
statParser.RULE_statlist = 11;
statParser.RULE_statlistb = 12;
statParser.RULE_numexpression = 13;
statParser.RULE_terms = 14;
statParser.RULE_term = 15;
statParser.RULE_unaryexprs = 16;
statParser.RULE_unaryexpr = 17;
statParser.RULE_factor = 18;
statParser.RULE_lvalue = 19;
statParser.RULE_lvalueb = 20;
statParser.RULE_brackets = 21;
statParser.RULE_multivardecl = 22;
statParser.RULE_vardeclcomma = 23;


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.Int = function() {
    return this.getToken(statParser.Int, 0);
};

StatementContext.prototype.Identifier = function() {
    return this.getToken(statParser.Identifier, 0);
};

StatementContext.prototype.brackets = function() {
    return this.getTypedRuleContext(BracketsContext,0);
};

StatementContext.prototype.multivardecl = function() {
    return this.getTypedRuleContext(MultivardeclContext,0);
};

StatementContext.prototype.Semi = function() {
    return this.getToken(statParser.Semi, 0);
};

StatementContext.prototype.String = function() {
    return this.getToken(statParser.String, 0);
};

StatementContext.prototype.varoratrib = function() {
    return this.getTypedRuleContext(VaroratribContext,0);
};

StatementContext.prototype.printstat = function() {
    return this.getTypedRuleContext(PrintstatContext,0);
};

StatementContext.prototype.readstat = function() {
    return this.getTypedRuleContext(ReadstatContext,0);
};

StatementContext.prototype.returnstat = function() {
    return this.getTypedRuleContext(ReturnstatContext,0);
};

StatementContext.prototype.superstat = function() {
    return this.getTypedRuleContext(SuperstatContext,0);
};

StatementContext.prototype.ifstat = function() {
    return this.getTypedRuleContext(IfstatContext,0);
};

StatementContext.prototype.forstat = function() {
    return this.getTypedRuleContext(ForstatContext,0);
};

StatementContext.prototype.LeftBrace = function() {
    return this.getToken(statParser.LeftBrace, 0);
};

StatementContext.prototype.statlist = function() {
    return this.getTypedRuleContext(StatlistContext,0);
};

StatementContext.prototype.RightBrace = function() {
    return this.getToken(statParser.RightBrace, 0);
};

StatementContext.prototype.Break = function() {
    return this.getToken(statParser.Break, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.StatementContext = StatementContext;

statParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, statParser.RULE_statement);
    try {
        this.state = 83;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.Int:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.match(statParser.Int);
            this.state = 49;
            this.match(statParser.Identifier);
            this.state = 50;
            this.brackets();
            this.state = 51;
            this.multivardecl();
            this.state = 52;
            this.match(statParser.Semi);
            break;
        case statParser.String:
            this.enterOuterAlt(localctx, 2);
            this.state = 54;
            this.match(statParser.String);
            this.state = 55;
            this.match(statParser.Identifier);
            this.state = 56;
            this.brackets();
            this.state = 57;
            this.multivardecl();
            this.state = 58;
            this.match(statParser.Semi);
            break;
        case statParser.Identifier:
            this.enterOuterAlt(localctx, 3);
            this.state = 60;
            this.match(statParser.Identifier);
            this.state = 61;
            this.varoratrib();
            break;
        case statParser.Print:
            this.enterOuterAlt(localctx, 4);
            this.state = 62;
            this.printstat();
            this.state = 63;
            this.match(statParser.Semi);
            break;
        case statParser.Read:
            this.enterOuterAlt(localctx, 5);
            this.state = 65;
            this.readstat();
            this.state = 66;
            this.match(statParser.Semi);
            break;
        case statParser.Return:
            this.enterOuterAlt(localctx, 6);
            this.state = 68;
            this.returnstat();
            this.state = 69;
            this.match(statParser.Semi);
            break;
        case statParser.Super:
            this.enterOuterAlt(localctx, 7);
            this.state = 71;
            this.superstat();
            this.state = 72;
            this.match(statParser.Semi);
            break;
        case statParser.If:
        case statParser.Ife:
            this.enterOuterAlt(localctx, 8);
            this.state = 74;
            this.ifstat();
            break;
        case statParser.For:
            this.enterOuterAlt(localctx, 9);
            this.state = 75;
            this.forstat();
            break;
        case statParser.LeftBrace:
            this.enterOuterAlt(localctx, 10);
            this.state = 76;
            this.match(statParser.LeftBrace);
            this.state = 77;
            this.statlist();
            this.state = 78;
            this.match(statParser.RightBrace);
            break;
        case statParser.Break:
            this.enterOuterAlt(localctx, 11);
            this.state = 80;
            this.match(statParser.Break);
            this.state = 81;
            this.match(statParser.Semi);
            break;
        case statParser.Semi:
            this.enterOuterAlt(localctx, 12);
            this.state = 82;
            this.match(statParser.Semi);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VaroratribContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_varoratrib;
    return this;
}

VaroratribContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VaroratribContext.prototype.constructor = VaroratribContext;

VaroratribContext.prototype.Identifier = function() {
    return this.getToken(statParser.Identifier, 0);
};

VaroratribContext.prototype.brackets = function() {
    return this.getTypedRuleContext(BracketsContext,0);
};

VaroratribContext.prototype.multivardecl = function() {
    return this.getTypedRuleContext(MultivardeclContext,0);
};

VaroratribContext.prototype.Semi = function() {
    return this.getToken(statParser.Semi, 0);
};

VaroratribContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

VaroratribContext.prototype.Assign = function() {
    return this.getToken(statParser.Assign, 0);
};

VaroratribContext.prototype.atribstatb = function() {
    return this.getTypedRuleContext(AtribstatbContext,0);
};

VaroratribContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterVaroratrib(this);
	}
};

VaroratribContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitVaroratrib(this);
	}
};

VaroratribContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitVaroratrib(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.VaroratribContext = VaroratribContext;

statParser.prototype.varoratrib = function() {

    var localctx = new VaroratribContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, statParser.RULE_varoratrib);
    try {
        this.state = 95;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.match(statParser.Identifier);
            this.state = 86;
            this.brackets();
            this.state = 87;
            this.multivardecl();
            this.state = 88;
            this.match(statParser.Semi);
            break;
        case statParser.LeftBracket:
        case statParser.Dot:
        case statParser.Assign:
            this.enterOuterAlt(localctx, 2);
            this.state = 90;
            this.lvalue();
            this.state = 91;
            this.match(statParser.Assign);
            this.state = 92;
            this.atribstatb();
            this.state = 93;
            this.match(statParser.Semi);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtribstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_atribstat;
    return this;
}

AtribstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtribstatContext.prototype.constructor = AtribstatContext;

AtribstatContext.prototype.Identifier = function() {
    return this.getToken(statParser.Identifier, 0);
};

AtribstatContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

AtribstatContext.prototype.Assign = function() {
    return this.getToken(statParser.Assign, 0);
};

AtribstatContext.prototype.atribstatb = function() {
    return this.getTypedRuleContext(AtribstatbContext,0);
};

AtribstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterAtribstat(this);
	}
};

AtribstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitAtribstat(this);
	}
};

AtribstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitAtribstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.AtribstatContext = AtribstatContext;

statParser.prototype.atribstat = function() {

    var localctx = new AtribstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, statParser.RULE_atribstat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(statParser.Identifier);
        this.state = 98;
        this.lvalue();
        this.state = 99;
        this.match(statParser.Assign);
        this.state = 100;
        this.atribstatb();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AtribstatbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_atribstatb;
    return this;
}

AtribstatbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtribstatbContext.prototype.constructor = AtribstatbContext;

AtribstatbContext.prototype.numexpression = function() {
    return this.getTypedRuleContext(NumexpressionContext,0);
};

AtribstatbContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterAtribstatb(this);
	}
};

AtribstatbContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitAtribstatb(this);
	}
};

AtribstatbContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitAtribstatb(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.AtribstatbContext = AtribstatbContext;

statParser.prototype.atribstatb = function() {

    var localctx = new AtribstatbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, statParser.RULE_atribstatb);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.numexpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrintstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_printstat;
    return this;
}

PrintstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintstatContext.prototype.constructor = PrintstatContext;

PrintstatContext.prototype.Print = function() {
    return this.getToken(statParser.Print, 0);
};

PrintstatContext.prototype.numexpression = function() {
    return this.getTypedRuleContext(NumexpressionContext,0);
};

PrintstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterPrintstat(this);
	}
};

PrintstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitPrintstat(this);
	}
};

PrintstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitPrintstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.PrintstatContext = PrintstatContext;

statParser.prototype.printstat = function() {

    var localctx = new PrintstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, statParser.RULE_printstat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(statParser.Print);
        this.state = 105;
        this.numexpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReadstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_readstat;
    return this;
}

ReadstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReadstatContext.prototype.constructor = ReadstatContext;

ReadstatContext.prototype.Read = function() {
    return this.getToken(statParser.Read, 0);
};

ReadstatContext.prototype.Identifier = function() {
    return this.getToken(statParser.Identifier, 0);
};

ReadstatContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

ReadstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterReadstat(this);
	}
};

ReadstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitReadstat(this);
	}
};

ReadstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitReadstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.ReadstatContext = ReadstatContext;

statParser.prototype.readstat = function() {

    var localctx = new ReadstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, statParser.RULE_readstat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(statParser.Read);
        this.state = 108;
        this.match(statParser.Identifier);
        this.state = 109;
        this.lvalue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_returnstat;
    return this;
}

ReturnstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnstatContext.prototype.constructor = ReturnstatContext;

ReturnstatContext.prototype.Return = function() {
    return this.getToken(statParser.Return, 0);
};

ReturnstatContext.prototype.returnstatb = function() {
    return this.getTypedRuleContext(ReturnstatbContext,0);
};

ReturnstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterReturnstat(this);
	}
};

ReturnstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitReturnstat(this);
	}
};

ReturnstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitReturnstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.ReturnstatContext = ReturnstatContext;

statParser.prototype.returnstat = function() {

    var localctx = new ReturnstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, statParser.RULE_returnstat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this.match(statParser.Return);
        this.state = 112;
        this.returnstatb();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReturnstatbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_returnstatb;
    return this;
}

ReturnstatbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnstatbContext.prototype.constructor = ReturnstatbContext;

ReturnstatbContext.prototype.numexpression = function() {
    return this.getTypedRuleContext(NumexpressionContext,0);
};

ReturnstatbContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterReturnstatb(this);
	}
};

ReturnstatbContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitReturnstatb(this);
	}
};

ReturnstatbContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitReturnstatb(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.ReturnstatbContext = ReturnstatbContext;

statParser.prototype.returnstatb = function() {

    var localctx = new ReturnstatbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, statParser.RULE_returnstatb);
    try {
        this.state = 116;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.LeftParen:
        case statParser.Plus:
        case statParser.Minus:
        case statParser.Null:
        case statParser.Identifier:
        case statParser.IntConstant:
        case statParser.StringConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 114;
            this.numexpression();
            break;
        case statParser.Semi:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SuperstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_superstat;
    return this;
}

SuperstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuperstatContext.prototype.constructor = SuperstatContext;

SuperstatContext.prototype.Super = function() {
    return this.getToken(statParser.Super, 0);
};

SuperstatContext.prototype.LeftParen = function() {
    return this.getToken(statParser.LeftParen, 0);
};

SuperstatContext.prototype.IntConstant = function() {
    return this.getToken(statParser.IntConstant, 0);
};

SuperstatContext.prototype.RightParen = function() {
    return this.getToken(statParser.RightParen, 0);
};

SuperstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterSuperstat(this);
	}
};

SuperstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitSuperstat(this);
	}
};

SuperstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitSuperstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.SuperstatContext = SuperstatContext;

statParser.prototype.superstat = function() {

    var localctx = new SuperstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, statParser.RULE_superstat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(statParser.Super);
        this.state = 119;
        this.match(statParser.LeftParen);
        this.state = 120;
        this.match(statParser.IntConstant);
        this.state = 121;
        this.match(statParser.RightParen);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IfstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_ifstat;
    return this;
}

IfstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfstatContext.prototype.constructor = IfstatContext;

IfstatContext.prototype.If = function() {
    return this.getToken(statParser.If, 0);
};

IfstatContext.prototype.LeftParen = function() {
    return this.getToken(statParser.LeftParen, 0);
};

IfstatContext.prototype.numexpression = function() {
    return this.getTypedRuleContext(NumexpressionContext,0);
};

IfstatContext.prototype.RightParen = function() {
    return this.getToken(statParser.RightParen, 0);
};

IfstatContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

IfstatContext.prototype.Ife = function() {
    return this.getToken(statParser.Ife, 0);
};

IfstatContext.prototype.Else = function() {
    return this.getToken(statParser.Else, 0);
};

IfstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterIfstat(this);
	}
};

IfstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitIfstat(this);
	}
};

IfstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitIfstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.IfstatContext = IfstatContext;

statParser.prototype.ifstat = function() {

    var localctx = new IfstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, statParser.RULE_ifstat);
    try {
        this.state = 137;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.If:
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.match(statParser.If);
            this.state = 124;
            this.match(statParser.LeftParen);
            this.state = 125;
            this.numexpression();
            this.state = 126;
            this.match(statParser.RightParen);
            this.state = 127;
            this.statement();
            break;
        case statParser.Ife:
            this.enterOuterAlt(localctx, 2);
            this.state = 129;
            this.match(statParser.Ife);
            this.state = 130;
            this.match(statParser.LeftParen);
            this.state = 131;
            this.numexpression();
            this.state = 132;
            this.match(statParser.RightParen);
            this.state = 133;
            this.statement();
            this.state = 134;
            this.match(statParser.Else);
            this.state = 135;
            this.statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ForstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_forstat;
    return this;
}

ForstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForstatContext.prototype.constructor = ForstatContext;

ForstatContext.prototype.For = function() {
    return this.getToken(statParser.For, 0);
};

ForstatContext.prototype.LeftParen = function() {
    return this.getToken(statParser.LeftParen, 0);
};

ForstatContext.prototype.atribstat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AtribstatContext);
    } else {
        return this.getTypedRuleContext(AtribstatContext,i);
    }
};

ForstatContext.prototype.Semi = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(statParser.Semi);
    } else {
        return this.getToken(statParser.Semi, i);
    }
};


ForstatContext.prototype.numexpression = function() {
    return this.getTypedRuleContext(NumexpressionContext,0);
};

ForstatContext.prototype.RightParen = function() {
    return this.getToken(statParser.RightParen, 0);
};

ForstatContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

ForstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterForstat(this);
	}
};

ForstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitForstat(this);
	}
};

ForstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitForstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.ForstatContext = ForstatContext;

statParser.prototype.forstat = function() {

    var localctx = new ForstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, statParser.RULE_forstat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(statParser.For);
        this.state = 140;
        this.match(statParser.LeftParen);
        this.state = 141;
        this.atribstat();
        this.state = 142;
        this.match(statParser.Semi);
        this.state = 143;
        this.numexpression();
        this.state = 144;
        this.match(statParser.Semi);
        this.state = 145;
        this.atribstat();
        this.state = 146;
        this.match(statParser.RightParen);
        this.state = 147;
        this.statement();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_statlist;
    return this;
}

StatlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatlistContext.prototype.constructor = StatlistContext;

StatlistContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

StatlistContext.prototype.statlistb = function() {
    return this.getTypedRuleContext(StatlistbContext,0);
};

StatlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterStatlist(this);
	}
};

StatlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitStatlist(this);
	}
};

StatlistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitStatlist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.StatlistContext = StatlistContext;

statParser.prototype.statlist = function() {

    var localctx = new StatlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, statParser.RULE_statlist);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.statement();
        this.state = 150;
        this.statlistb();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatlistbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_statlistb;
    return this;
}

StatlistbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatlistbContext.prototype.constructor = StatlistbContext;

StatlistbContext.prototype.statlist = function() {
    return this.getTypedRuleContext(StatlistContext,0);
};

StatlistbContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterStatlistb(this);
	}
};

StatlistbContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitStatlistb(this);
	}
};

StatlistbContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitStatlistb(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.StatlistbContext = StatlistbContext;

statParser.prototype.statlistb = function() {

    var localctx = new StatlistbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, statParser.RULE_statlistb);
    try {
        this.state = 154;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.LeftBrace:
        case statParser.Semi:
        case statParser.Int:
        case statParser.String:
        case statParser.Break:
        case statParser.Print:
        case statParser.Read:
        case statParser.Return:
        case statParser.Super:
        case statParser.If:
        case statParser.Ife:
        case statParser.For:
        case statParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 152;
            this.statlist();
            break;
        case statParser.RightBrace:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_numexpression;
    return this;
}

NumexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumexpressionContext.prototype.constructor = NumexpressionContext;

NumexpressionContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

NumexpressionContext.prototype.terms = function() {
    return this.getTypedRuleContext(TermsContext,0);
};

NumexpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterNumexpression(this);
	}
};

NumexpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitNumexpression(this);
	}
};

NumexpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitNumexpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.NumexpressionContext = NumexpressionContext;

statParser.prototype.numexpression = function() {

    var localctx = new NumexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, statParser.RULE_numexpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.term();
        this.state = 157;
        this.terms();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TermsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_terms;
    return this;
}

TermsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermsContext.prototype.constructor = TermsContext;

TermsContext.prototype.Plus = function() {
    return this.getToken(statParser.Plus, 0);
};

TermsContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermsContext.prototype.terms = function() {
    return this.getTypedRuleContext(TermsContext,0);
};

TermsContext.prototype.Minus = function() {
    return this.getToken(statParser.Minus, 0);
};

TermsContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterTerms(this);
	}
};

TermsContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitTerms(this);
	}
};

TermsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitTerms(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.TermsContext = TermsContext;

statParser.prototype.terms = function() {

    var localctx = new TermsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, statParser.RULE_terms);
    try {
        this.state = 168;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.Plus:
            this.enterOuterAlt(localctx, 1);
            this.state = 159;
            this.match(statParser.Plus);
            this.state = 160;
            this.term();
            this.state = 161;
            this.terms();
            break;
        case statParser.Minus:
            this.enterOuterAlt(localctx, 2);
            this.state = 163;
            this.match(statParser.Minus);
            this.state = 164;
            this.term();
            this.state = 165;
            this.terms();
            break;
        case statParser.RightParen:
        case statParser.Semi:
            this.enterOuterAlt(localctx, 3);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.unaryexpr = function() {
    return this.getTypedRuleContext(UnaryexprContext,0);
};

TermContext.prototype.unaryexprs = function() {
    return this.getTypedRuleContext(UnaryexprsContext,0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.TermContext = TermContext;

statParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, statParser.RULE_term);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.unaryexpr();
        this.state = 171;
        this.unaryexprs();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnaryexprsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_unaryexprs;
    return this;
}

UnaryexprsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryexprsContext.prototype.constructor = UnaryexprsContext;

UnaryexprsContext.prototype.Star = function() {
    return this.getToken(statParser.Star, 0);
};

UnaryexprsContext.prototype.unaryexpr = function() {
    return this.getTypedRuleContext(UnaryexprContext,0);
};

UnaryexprsContext.prototype.unaryexprs = function() {
    return this.getTypedRuleContext(UnaryexprsContext,0);
};

UnaryexprsContext.prototype.Div = function() {
    return this.getToken(statParser.Div, 0);
};

UnaryexprsContext.prototype.Mod = function() {
    return this.getToken(statParser.Mod, 0);
};

UnaryexprsContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterUnaryexprs(this);
	}
};

UnaryexprsContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitUnaryexprs(this);
	}
};

UnaryexprsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitUnaryexprs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.UnaryexprsContext = UnaryexprsContext;

statParser.prototype.unaryexprs = function() {

    var localctx = new UnaryexprsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, statParser.RULE_unaryexprs);
    try {
        this.state = 186;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.Star:
            this.enterOuterAlt(localctx, 1);
            this.state = 173;
            this.match(statParser.Star);
            this.state = 174;
            this.unaryexpr();
            this.state = 175;
            this.unaryexprs();
            break;
        case statParser.Div:
            this.enterOuterAlt(localctx, 2);
            this.state = 177;
            this.match(statParser.Div);
            this.state = 178;
            this.unaryexpr();
            this.state = 179;
            this.unaryexprs();
            break;
        case statParser.Mod:
            this.enterOuterAlt(localctx, 3);
            this.state = 181;
            this.match(statParser.Mod);
            this.state = 182;
            this.unaryexpr();
            this.state = 183;
            this.unaryexprs();
            break;
        case statParser.RightParen:
        case statParser.Plus:
        case statParser.Minus:
        case statParser.Semi:
            this.enterOuterAlt(localctx, 4);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnaryexprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_unaryexpr;
    return this;
}

UnaryexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryexprContext.prototype.constructor = UnaryexprContext;

UnaryexprContext.prototype.Plus = function() {
    return this.getToken(statParser.Plus, 0);
};

UnaryexprContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

UnaryexprContext.prototype.Minus = function() {
    return this.getToken(statParser.Minus, 0);
};

UnaryexprContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterUnaryexpr(this);
	}
};

UnaryexprContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitUnaryexpr(this);
	}
};

UnaryexprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitUnaryexpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.UnaryexprContext = UnaryexprContext;

statParser.prototype.unaryexpr = function() {

    var localctx = new UnaryexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, statParser.RULE_unaryexpr);
    try {
        this.state = 193;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.Plus:
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this.match(statParser.Plus);
            this.state = 189;
            this.factor();
            break;
        case statParser.Minus:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.match(statParser.Minus);
            this.state = 191;
            this.factor();
            break;
        case statParser.LeftParen:
        case statParser.Null:
        case statParser.Identifier:
        case statParser.IntConstant:
        case statParser.StringConstant:
            this.enterOuterAlt(localctx, 3);
            this.state = 192;
            this.factor();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.IntConstant = function() {
    return this.getToken(statParser.IntConstant, 0);
};

FactorContext.prototype.StringConstant = function() {
    return this.getToken(statParser.StringConstant, 0);
};

FactorContext.prototype.Null = function() {
    return this.getToken(statParser.Null, 0);
};

FactorContext.prototype.Identifier = function() {
    return this.getToken(statParser.Identifier, 0);
};

FactorContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

FactorContext.prototype.LeftParen = function() {
    return this.getToken(statParser.LeftParen, 0);
};

FactorContext.prototype.numexpression = function() {
    return this.getTypedRuleContext(NumexpressionContext,0);
};

FactorContext.prototype.RightParen = function() {
    return this.getToken(statParser.RightParen, 0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitFactor(this);
	}
};

FactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.FactorContext = FactorContext;

statParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, statParser.RULE_factor);
    try {
        this.state = 204;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.IntConstant:
            this.enterOuterAlt(localctx, 1);
            this.state = 195;
            this.match(statParser.IntConstant);
            break;
        case statParser.StringConstant:
            this.enterOuterAlt(localctx, 2);
            this.state = 196;
            this.match(statParser.StringConstant);
            break;
        case statParser.Null:
            this.enterOuterAlt(localctx, 3);
            this.state = 197;
            this.match(statParser.Null);
            break;
        case statParser.Identifier:
            this.enterOuterAlt(localctx, 4);
            this.state = 198;
            this.match(statParser.Identifier);
            this.state = 199;
            this.lvalue();
            break;
        case statParser.LeftParen:
            this.enterOuterAlt(localctx, 5);
            this.state = 200;
            this.match(statParser.LeftParen);
            this.state = 201;
            this.numexpression();
            this.state = 202;
            this.match(statParser.RightParen);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LvalueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_lvalue;
    return this;
}

LvalueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LvalueContext.prototype.constructor = LvalueContext;

LvalueContext.prototype.LeftBracket = function() {
    return this.getToken(statParser.LeftBracket, 0);
};

LvalueContext.prototype.IntConstant = function() {
    return this.getToken(statParser.IntConstant, 0);
};

LvalueContext.prototype.RightBracket = function() {
    return this.getToken(statParser.RightBracket, 0);
};

LvalueContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

LvalueContext.prototype.Dot = function() {
    return this.getToken(statParser.Dot, 0);
};

LvalueContext.prototype.Identifier = function() {
    return this.getToken(statParser.Identifier, 0);
};

LvalueContext.prototype.lvalueb = function() {
    return this.getTypedRuleContext(LvaluebContext,0);
};

LvalueContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterLvalue(this);
	}
};

LvalueContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitLvalue(this);
	}
};

LvalueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitLvalue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.LvalueContext = LvalueContext;

statParser.prototype.lvalue = function() {

    var localctx = new LvalueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, statParser.RULE_lvalue);
    try {
        this.state = 214;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.LeftBracket:
            this.enterOuterAlt(localctx, 1);
            this.state = 206;
            this.match(statParser.LeftBracket);
            this.state = 207;
            this.match(statParser.IntConstant);
            this.state = 208;
            this.match(statParser.RightBracket);
            this.state = 209;
            this.lvalue();
            break;
        case statParser.Dot:
            this.enterOuterAlt(localctx, 2);
            this.state = 210;
            this.match(statParser.Dot);
            this.state = 211;
            this.match(statParser.Identifier);
            this.state = 212;
            this.lvalueb();
            break;
        case statParser.RightParen:
        case statParser.Plus:
        case statParser.Minus:
        case statParser.Star:
        case statParser.Div:
        case statParser.Mod:
        case statParser.Semi:
        case statParser.Assign:
            this.enterOuterAlt(localctx, 3);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LvaluebContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_lvalueb;
    return this;
}

LvaluebContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LvaluebContext.prototype.constructor = LvaluebContext;

LvaluebContext.prototype.LeftParen = function() {
    return this.getToken(statParser.LeftParen, 0);
};

LvaluebContext.prototype.IntConstant = function() {
    return this.getToken(statParser.IntConstant, 0);
};

LvaluebContext.prototype.RightParen = function() {
    return this.getToken(statParser.RightParen, 0);
};

LvaluebContext.prototype.lvalue = function() {
    return this.getTypedRuleContext(LvalueContext,0);
};

LvaluebContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterLvalueb(this);
	}
};

LvaluebContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitLvalueb(this);
	}
};

LvaluebContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitLvalueb(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.LvaluebContext = LvaluebContext;

statParser.prototype.lvalueb = function() {

    var localctx = new LvaluebContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, statParser.RULE_lvalueb);
    try {
        this.state = 221;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.LeftParen:
            this.enterOuterAlt(localctx, 1);
            this.state = 216;
            this.match(statParser.LeftParen);
            this.state = 217;
            this.match(statParser.IntConstant);
            this.state = 218;
            this.match(statParser.RightParen);
            this.state = 219;
            this.lvalue();
            break;
        case statParser.RightParen:
        case statParser.LeftBracket:
        case statParser.Plus:
        case statParser.Minus:
        case statParser.Star:
        case statParser.Div:
        case statParser.Mod:
        case statParser.Semi:
        case statParser.Dot:
        case statParser.Assign:
            this.enterOuterAlt(localctx, 2);
            this.state = 220;
            this.lvalue();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BracketsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_brackets;
    return this;
}

BracketsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BracketsContext.prototype.constructor = BracketsContext;

BracketsContext.prototype.LeftBracket = function() {
    return this.getToken(statParser.LeftBracket, 0);
};

BracketsContext.prototype.IntConstant = function() {
    return this.getToken(statParser.IntConstant, 0);
};

BracketsContext.prototype.RightBracket = function() {
    return this.getToken(statParser.RightBracket, 0);
};

BracketsContext.prototype.brackets = function() {
    return this.getTypedRuleContext(BracketsContext,0);
};

BracketsContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterBrackets(this);
	}
};

BracketsContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitBrackets(this);
	}
};

BracketsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitBrackets(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.BracketsContext = BracketsContext;

statParser.prototype.brackets = function() {

    var localctx = new BracketsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, statParser.RULE_brackets);
    try {
        this.state = 228;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.LeftBracket:
            this.enterOuterAlt(localctx, 1);
            this.state = 223;
            this.match(statParser.LeftBracket);
            this.state = 224;
            this.match(statParser.IntConstant);
            this.state = 225;
            this.match(statParser.RightBracket);
            this.state = 226;
            this.brackets();
            break;
        case statParser.Semi:
        case statParser.Comma:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultivardeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_multivardecl;
    return this;
}

MultivardeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultivardeclContext.prototype.constructor = MultivardeclContext;

MultivardeclContext.prototype.vardeclcomma = function() {
    return this.getTypedRuleContext(VardeclcommaContext,0);
};

MultivardeclContext.prototype.multivardecl = function() {
    return this.getTypedRuleContext(MultivardeclContext,0);
};

MultivardeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterMultivardecl(this);
	}
};

MultivardeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitMultivardecl(this);
	}
};

MultivardeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitMultivardecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.MultivardeclContext = MultivardeclContext;

statParser.prototype.multivardecl = function() {

    var localctx = new MultivardeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, statParser.RULE_multivardecl);
    try {
        this.state = 234;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case statParser.Comma:
            this.enterOuterAlt(localctx, 1);
            this.state = 230;
            this.vardeclcomma();
            this.state = 231;
            this.multivardecl();
            break;
        case statParser.Semi:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VardeclcommaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = statParser.RULE_vardeclcomma;
    return this;
}

VardeclcommaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VardeclcommaContext.prototype.constructor = VardeclcommaContext;

VardeclcommaContext.prototype.Comma = function() {
    return this.getToken(statParser.Comma, 0);
};

VardeclcommaContext.prototype.Identifier = function() {
    return this.getToken(statParser.Identifier, 0);
};

VardeclcommaContext.prototype.brackets = function() {
    return this.getTypedRuleContext(BracketsContext,0);
};

VardeclcommaContext.prototype.enterRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.enterVardeclcomma(this);
	}
};

VardeclcommaContext.prototype.exitRule = function(listener) {
    if(listener instanceof statListener ) {
        listener.exitVardeclcomma(this);
	}
};

VardeclcommaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof statVisitor ) {
        return visitor.visitVardeclcomma(this);
    } else {
        return visitor.visitChildren(this);
    }
};




statParser.VardeclcommaContext = VardeclcommaContext;

statParser.prototype.vardeclcomma = function() {

    var localctx = new VardeclcommaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, statParser.RULE_vardeclcomma);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.match(statParser.Comma);
        this.state = 237;
        this.match(statParser.Identifier);
        this.state = 238;
        this.brackets();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.statParser = statParser;
