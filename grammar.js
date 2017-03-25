/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,5],$V1=[1,4],$V2=[1,5],$V3=[1,11],$V4=[2,9],$V5=[1,15],$V6=[8,10,12,19,25,28,33,34,36,38,39,42,65,71,73],$V7=[2,19],$V8=[1,42],$V9=[1,29],$Va=[1,53],$Vb=[1,54],$Vc=[1,31],$Vd=[1,32],$Ve=[1,33],$Vf=[1,34],$Vg=[1,35],$Vh=[1,36],$Vi=[1,49],$Vj=[1,50],$Vk=[1,52],$Vl=[6,8,10,12,16,19,25,28,29,30,33,34,36,38,39,41,42,65,71,73],$Vm=[8,10,12,19,25,28,33,34,36,38,39,41,42,65,71,73],$Vn=[10,13,18,21,49],$Vo=[10,13,18,21,46,48,49,50,52,54,56,58,60,61,62,63,65,66,68,69],$Vp=[2,65],$Vq=[1,77],$Vr=[10,13,18,21,48,49,50],$Vs=[1,78],$Vt=[10,13,18,21,48,49,50,52],$Vu=[1,79],$Vv=[1,80],$Vw=[10,13,18,21,48,49,50,52,54,56],$Vx=[1,81],$Vy=[1,82],$Vz=[1,83],$VA=[1,84],$VB=[10,13,18,21,48,49,50,52,54,56,58,60,61,62],$VC=[1,85],$VD=[1,86],$VE=[10,13,18,21,48,49,50,52,54,56,58,60,61,62,63,65],$VF=[1,87],$VG=[1,88],$VH=[1,89],$VI=[10,13,18,21,48,49,50,52,54,56,58,60,61,62,63,65,66,68,69],$VJ=[1,91],$VK=[18,21],$VL=[2,64];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Programa":3,"DeclFuncVar":4,"DeclProg":5,"EOF":6,"Tipo":7,"ID":8,"DeclVar":9,";":10,"[":11,"INTCONST":12,"]":13,"DEclFuncVar":14,"DeclFunc":15,"PROGRAMA":16,"Bloco":17,",":18,"(":19,"ListaParametros":20,")":21,"ListaParametrosCont":22,"Lista":23,"ParametrosCont":24,"{":25,"ListaDeclVar":26,"ListaComando":27,"}":28,"INT":29,"CAR":30,"Comando":31,"Expr":32,"RETORNE":33,"LEIA":34,"LValueExpr":35,"ESCREVA":36,"CADEIACARACTERES":37,"NOVALINHA":38,"SE":39,"ENTAO":40,"SENAO":41,"ENQUANTO":42,"EXECUTE":43,"AssignExpr":44,"CondExpr":45,"=":46,"OrExpr":47,"?":48,":":49,"OU":50,"AndExpr":51,"E":52,"EqExpr":53,"==":54,"DesigExpr":55,"!=":56,"DesignExpr":57,"<":58,"AddExpr":59,">":60,">=":61,"<=":62,"+":63,"MulExpr":64,"-":65,"*":66,"UnExpr":67,"/":68,"%":69,"PrimExpr":70,"!":71,"ListExpr":72,"CARCONST":73,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",8:"ID",10:";",11:"[",12:"INTCONST",13:"]",14:"DEclFuncVar",16:"PROGRAMA",18:",",19:"(",21:")",23:"Lista",24:"ParametrosCont",25:"{",28:"}",29:"INT",30:"CAR",33:"RETORNE",34:"LEIA",36:"ESCREVA",37:"CADEIACARACTERES",38:"NOVALINHA",39:"SE",40:"ENTAO",41:"SENAO",42:"ENQUANTO",43:"EXECUTE",46:"=",48:"?",49:":",50:"OU",52:"E",54:"==",56:"!=",57:"DesignExpr",58:"<",60:">",61:">=",62:"<=",63:"+",65:"-",66:"*",68:"/",69:"%",71:"!",73:"CARCONST"},
productions_: [0,[3,3],[4,5],[4,8],[4,4],[4,0],[5,2],[9,3],[9,6],[9,0],[15,4],[20,0],[20,1],[22,2],[22,4],[22,4],[22,7],[17,4],[17,3],[26,0],[26,5],[26,8],[7,1],[7,1],[27,1],[27,2],[31,1],[31,2],[31,3],[31,3],[31,3],[31,3],[31,2],[31,6],[31,8],[31,6],[31,1],[32,1],[44,1],[44,3],[45,1],[45,5],[47,3],[47,1],[51,3],[51,1],[53,3],[53,3],[53,1],[55,3],[55,3],[55,3],[55,3],[55,1],[59,3],[59,3],[59,1],[64,3],[64,3],[64,3],[64,1],[67,2],[67,2],[67,1],[35,4],[35,1],[70,4],[70,3],[70,4],[70,1],[70,1],[70,1],[70,3],[72,1],[72,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{3:1,4:2,7:3,16:$V0,29:$V1,30:$V2},{1:[3]},{5:6,16:[1,7]},{8:[1,8]},{8:[2,22]},{8:[2,23]},{6:[1,9]},{17:10,25:$V3},{9:12,10:$V4,11:[1,13],15:14,18:$V5,19:[1,16]},{1:[2,1]},{6:[2,6]},o($V6,$V7,{26:17,7:18,29:$V1,30:$V2}),{10:[1,19]},{12:[1,20]},{4:21,7:3,16:$V0,29:$V1,30:$V2},{8:[1,22]},{7:25,20:23,21:[2,11],22:24,29:$V1,30:$V2},{8:$V8,10:$V9,12:$Va,17:37,19:$Vb,25:$V3,27:26,28:[1,27],31:28,32:30,33:$Vc,34:$Vd,35:40,36:$Ve,38:$Vf,39:$Vg,42:$Vh,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:[1,55]},{4:56,7:3,16:$V0,29:$V1,30:$V2},{13:[1,57]},{16:[2,4]},{9:58,10:$V4,11:[1,59],18:$V5},{21:[1,60]},{21:[2,12]},{8:[1,61]},{28:[1,62]},o($Vl,[2,18]),{8:$V8,10:$V9,12:$Va,17:37,19:$Vb,25:$V3,27:63,28:[2,24],31:28,32:30,33:$Vc,34:$Vd,35:40,36:$Ve,38:$Vf,39:$Vg,42:$Vh,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},o($Vm,[2,26]),{10:[1,64]},{8:$V8,12:$Va,19:$Vb,32:65,35:40,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:[1,67],35:66},{8:$V8,12:$Va,19:$Vb,32:68,35:40,37:[1,69],44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{10:[1,70]},{19:[1,71]},{19:[1,72]},o($Vm,[2,36]),o([10,13,21,49],[2,37]),o($Vn,[2,38]),{46:[1,73]},o($Vn,[2,40],{48:[1,74],50:[1,75]}),o($Vo,$Vp,{11:[1,76],19:$Vq}),o($Vr,[2,43],{52:$Vs}),o($Vt,[2,45],{54:$Vu,56:$Vv}),o($Vw,[2,48],{58:$Vx,60:$Vy,61:$Vz,62:$VA}),o($VB,[2,53],{63:$VC,65:$VD}),o($VE,[2,56],{66:$VF,68:$VG,69:$VH}),o($VI,[2,60]),{8:$VJ,12:$Va,19:$Vb,70:90,73:$Vk},{8:$VJ,12:$Va,19:$Vb,70:92,73:$Vk},o($VI,[2,63]),o($VI,[2,70]),o($VI,[2,71]),{8:$V8,12:$Va,19:$Vb,32:93,35:40,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{9:94,10:$V4,11:[1,95],18:$V5},{16:[2,2]},{9:96,10:$V4,18:$V5},{10:[2,7]},{12:[1,97]},{17:98,25:$V3},{11:[1,99],18:[1,100],21:[2,13]},o($Vl,[2,17]),{28:[2,25]},o($Vm,[2,27]),{10:[1,101]},{10:[1,102]},{10:$Vp,11:[1,103]},{10:[1,104]},{10:[1,105]},o($Vm,[2,32]),{8:$V8,12:$Va,19:$Vb,32:106,35:40,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$V8,12:$Va,19:$Vb,32:107,35:40,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$V8,12:$Va,19:$Vb,35:40,44:108,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$V8,12:$Va,19:$Vb,32:109,35:40,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,51:110,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$V8,12:$Va,19:$Vb,32:111,35:40,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$V8,12:$Va,19:$Vb,21:[1,113],35:40,44:114,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,72:112,73:$Vk},{8:$VJ,12:$Va,19:$Vb,53:115,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,55:116,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{57:[1,117]},{8:$VJ,12:$Va,19:$Vb,59:118,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,59:119,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,59:120,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,59:121,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,64:122,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,64:123,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,65:$Vi,67:124,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,65:$Vi,67:125,70:51,71:$Vj,73:$Vk},{8:$VJ,12:$Va,19:$Vb,65:$Vi,67:126,70:51,71:$Vj,73:$Vk},o($VI,[2,61]),o($VI,[2,69],{11:[1,127],19:$Vq}),o($VI,[2,62]),{21:[1,128]},{10:[1,129]},{12:[1,130]},{10:[1,131]},{13:[1,132]},o([16,29,30],[2,10]),{13:[1,133]},{7:25,22:134,29:$V1,30:$V2},o($Vm,[2,28]),o($Vm,[2,29]),{8:$V8,12:$Va,19:$Vb,32:135,35:40,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},o($Vm,[2,30]),o($Vm,[2,31]),{21:[1,136]},{21:[1,137]},o($Vn,[2,39]),{49:[1,138]},o($Vr,[2,42],{52:$Vs}),{13:[1,139]},{18:[1,141],21:[1,140]},o($VI,[2,67]),o($VK,[2,73]),o($Vt,[2,44],{54:$Vu,56:$Vv}),o($Vw,[2,46],{58:$Vx,60:$Vy,61:$Vz,62:$VA}),o($Vw,[2,47]),o($VB,[2,49],{63:$VC,65:$VD}),o($VB,[2,50],{63:$VC,65:$VD}),o($VB,[2,51],{63:$VC,65:$VD}),o($VB,[2,52],{63:$VC,65:$VD}),o($VE,[2,54],{66:$VF,68:$VG,69:$VH}),o($VE,[2,55],{66:$VF,68:$VG,69:$VH}),o($VI,[2,57]),o($VI,[2,58]),o($VI,[2,59]),{8:$V8,12:$Va,19:$Vb,32:142,35:40,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},o($VI,[2,72]),o($V6,$V7,{7:18,26:143,29:$V1,30:$V2}),{13:[1,144]},{14:[1,145]},{9:146,10:$V4,18:$V5},{18:[1,147],21:[2,14]},{21:[2,15]},{13:[1,148]},{40:[1,149]},{43:[1,150]},{8:$VJ,12:$Va,19:$Vb,45:151,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},o($Vo,$VL),o($VI,[2,66]),{8:$V8,12:$Va,19:$Vb,35:40,44:152,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{13:[1,153]},o($V6,[2,20]),{9:154,10:$V4,18:$V5},{16:[2,3]},{10:[2,8]},{23:[1,155]},{10:$VL},{8:$V8,10:$V9,12:$Va,17:37,19:$Vb,25:$V3,31:156,32:30,33:$Vc,34:$Vd,35:40,36:$Ve,38:$Vf,39:$Vg,42:$Vh,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},{8:$V8,10:$V9,12:$Va,17:37,19:$Vb,25:$V3,31:157,32:30,33:$Vc,34:$Vd,35:40,36:$Ve,38:$Vf,39:$Vg,42:$Vh,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},o($Vn,[2,41]),o($VK,[2,74]),o($VI,[2,68]),{10:[1,158]},{24:[1,159]},o($V6,[2,33],{41:[1,160]}),o($Vm,[2,35]),o($V6,$V7,{7:18,26:161,29:$V1,30:$V2}),{21:[2,16]},{8:$V8,10:$V9,12:$Va,17:37,19:$Vb,25:$V3,31:162,32:30,33:$Vc,34:$Vd,35:40,36:$Ve,38:$Vf,39:$Vg,42:$Vh,44:38,45:39,47:41,51:43,53:44,55:45,59:46,64:47,65:$Vi,67:48,70:51,71:$Vj,73:$Vk},o($V6,[2,21]),o($Vm,[2,34])],
defaultActions: {4:[2,22],5:[2,23],9:[2,1],10:[2,6],21:[2,4],24:[2,12],56:[2,2],58:[2,7],63:[2,25],134:[2,15],145:[2,3],146:[2,8],148:[2,64],159:[2,16]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: /* ignore */ 
break;
case 1: return 73
break;
case 2: return 37
break;
case 3: return 30;
break;
case 4: return 'e';
break;
case 5: return 42;
break;
case 6: return 40;
break;
case 7: return 36;
break;
case 8: return 43;
break;
case 9: return 29;
break;
case 10: return 34;
break;
case 11: return 38;
break;
case 12: return 16;
break;
case 13: return 33;
break;
case 14: return 39;
break;
case 15: return 41;
break;
case 16: return 'ou';
break;
case 17: return 12; 
break;
case 18: return 8; 
break;
case 19: return 62;
break;
case 20: return 61;
break;
case 21: return 54;
break;
case 22: return 56;
break;
case 23: return 10;
break;
case 24: return 25;
break;
case 25: return 28;
break;
case 26: return 18;
break;
case 27: return 49;
break;
case 28: return 46;
break;
case 29: return 19;
break;
case 30: return 21;
break;
case 31: return 11;
break;
case 32: return 13;
break;
case 33: return 71;
break;
case 34: return 65;
break;
case 35: return 63;
break;
case 36: return 66;
break;
case 37: return 68;
break;
case 38: return 69;
break;
case 39: return 58;
break;
case 40: return 60;
break;
case 41: return 48;
break;
case 42: /*new line*/ 
break;
case 43: /* eat useless characters */ 
break;
case 44: return 6; 
break;
}
},
rules: [/^(?:\s+)/,/^(?:"[a-zA-Z]")/,/^(?:".*")/,/^(?:car\b)/,/^(?:e\b)/,/^(?:enquanto\b)/,/^(?:entao\b)/,/^(?:escreva\b)/,/^(?:execute\b)/,/^(?:int\b)/,/^(?:leia\b)/,/^(?:novalinha\b)/,/^(?:programa\b)/,/^(?:retorne\b)/,/^(?:se\b)/,/^(?:senao\b)/,/^(?:ou\b)/,/^(?:[0-9]+)/,/^(?:[a-zA-Z_][_a-zA-Z0-9]*)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:!=)/,/^(?:;)/,/^(?:\{)/,/^(?:\})/,/^(?:,)/,/^(?::)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:!)/,/^(?:-)/,/^(?:\+)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:<)/,/^(?:>)/,/^(?:\?)/,/^(?:\n)/,/^(?:[ \t\v\f])/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}