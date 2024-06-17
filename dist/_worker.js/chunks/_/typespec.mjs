var e=[Object.freeze({displayName:"TypeSpec",fileTypes:["tsp"],name:"typespec",patterns:[{include:"#statement"}],repository:{"alias-id":{begin:"(=)\\s*",beginCaptures:{1:{name:"keyword.operator.assignment.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.alias-id.typespec",patterns:[{include:"#expression"}]},"alias-statement":{begin:"\\b(alias)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)\\s*",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"entity.name.type.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.alias-statement.typespec",patterns:[{include:"#alias-id"},{include:"#type-parameters"}]},"augment-decorator-statement":{begin:"((@@)\\b[_$[:alpha:]](?:[_$[:alnum:]]|\\.[_$[:alpha:]])*\\b)",beginCaptures:{1:{name:"entity.name.tag.tsp"},2:{name:"entity.name.tag.tsp"}},end:"(?=[_$[:alpha:]])|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.augment-decorator-statement.typespec",patterns:[{include:"#token"},{include:"#parenthesized-expression"}]},"block-comment":{begin:"/\\*",end:"\\*/",name:"comment.block.tsp"},"boolean-literal":{match:"\\b(true|false)\\b",name:"constant.language.tsp"},callExpression:{begin:"(\\b[_$[:alpha:]](?:[_$[:alnum:]]|\\.[_$[:alpha:]])*\\b)\\s*(\\()",beginCaptures:{1:{name:"entity.name.function.tsp"},2:{name:"punctuation.parenthesis.open.tsp"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.tsp"}},name:"meta.callExpression.typespec",patterns:[{include:"#token"},{include:"#expression"},{include:"#punctuation-comma"}]},"const-statement":{begin:"\\b(const)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"variable.name.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.const-statement.typespec",patterns:[{include:"#type-annotation"},{include:"#operator-assignment"},{include:"#expression"}]},decorator:{begin:"((@)\\b[_$[:alpha:]](?:[_$[:alnum:]]|\\.[_$[:alpha:]])*\\b)",beginCaptures:{1:{name:"entity.name.tag.tsp"},2:{name:"entity.name.tag.tsp"}},end:"(?=[_$[:alpha:]])|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.decorator.typespec",patterns:[{include:"#token"},{include:"#parenthesized-expression"}]},"decorator-declaration-statement":{begin:"(?:(extern)\\s+)?\\b(dec)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"keyword.other.tsp"},3:{name:"entity.name.function.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.decorator-declaration-statement.typespec",patterns:[{include:"#token"},{include:"#operation-parameters"}]},directive:{begin:"\\s*(#\\b[_$[:alpha:]][_$[:alnum:]]*\\b)",beginCaptures:{1:{name:"keyword.directive.name.tsp"}},end:"$|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.directive.typespec",patterns:[{include:"#string-literal"},{include:"#identifier-expression"}]},"doc-comment":{begin:"/\\*\\*",beginCaptures:{0:{name:"comment.block.tsp"}},end:"\\*/",endCaptures:{0:{name:"comment.block.tsp"}},name:"comment.block.tsp",patterns:[{include:"#doc-comment-block"}]},"doc-comment-block":{patterns:[{include:"#doc-comment-param"},{include:"#doc-comment-return-tag"},{include:"#doc-comment-unknown-tag"}]},"doc-comment-param":{captures:{1:{name:"keyword.tag.tspdoc"},2:{name:"keyword.tag.tspdoc"},3:{name:"variable.name.tsp"}},match:"(?x)((@)(?:param|template|prop))\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)\\b",name:"comment.block.tsp"},"doc-comment-return-tag":{captures:{1:{name:"keyword.tag.tspdoc"},2:{name:"keyword.tag.tspdoc"}},match:"(?x)((@)(?:returns))\\b",name:"comment.block.tsp"},"doc-comment-unknown-tag":{captures:{1:{name:"entity.name.tag.tsp"},2:{name:"entity.name.tag.tsp"}},match:"(?x)((@)(?:\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`))\\b",name:"comment.block.tsp"},"else-expression":{begin:"\\b(else)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"((?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b))",name:"meta.else-expression.typespec",patterns:[{include:"#projection-expression"},{include:"#projection-body"}]},"else-if-expression":{begin:"\\b(else)\\s+(if)\\b",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"keyword.other.tsp"}},end:"((?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b))",name:"meta.else-if-expression.typespec",patterns:[{include:"#projection-expression"},{include:"#projection-body"}]},"enum-body":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.tsp"}},name:"meta.enum-body.typespec",patterns:[{include:"#enum-member"},{include:"#token"},{include:"#directive"},{include:"#decorator"},{include:"#punctuation-comma"}]},"enum-member":{begin:"(?:(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)\\s*(:?))",beginCaptures:{1:{name:"variable.name.tsp"},2:{name:"keyword.operator.type.annotation.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.enum-member.typespec",patterns:[{include:"#token"},{include:"#type-annotation"}]},"enum-statement":{begin:"\\b(enum)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"entity.name.type.tsp"}},end:"(?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.enum-statement.typespec",patterns:[{include:"#token"},{include:"#enum-body"}]},"escape-character":{match:"\\\\.",name:"constant.character.escape.tsp"},expression:{patterns:[{include:"#token"},{include:"#directive"},{include:"#parenthesized-expression"},{include:"#valueof"},{include:"#typeof"},{include:"#type-arguments"},{include:"#object-literal"},{include:"#tuple-literal"},{include:"#tuple-expression"},{include:"#model-expression"},{include:"#callExpression"},{include:"#identifier-expression"}]},"function-call":{begin:"(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)\\s*(\\()",beginCaptures:{1:{name:"entity.name.function.tsp"},2:{name:"punctuation.parenthesis.open.tsp"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.tsp"}},name:"meta.function-call.typespec",patterns:[{include:"#expression"}]},"function-declaration-statement":{begin:"(?:(extern)\\s+)?\\b(fn)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"keyword.other.tsp"},3:{name:"entity.name.function.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.function-declaration-statement.typespec",patterns:[{include:"#token"},{include:"#operation-parameters"},{include:"#type-annotation"}]},"identifier-expression":{match:"\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`",name:"entity.name.type.tsp"},"if-expression":{begin:"\\b(if)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"((?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b))",name:"meta.if-expression.typespec",patterns:[{include:"#projection-expression"},{include:"#projection-body"}]},"import-statement":{begin:"\\b(import)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.import-statement.typespec",patterns:[{include:"#token"}]},"interface-body":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.tsp"}},name:"meta.interface-body.typespec",patterns:[{include:"#token"},{include:"#directive"},{include:"#decorator"},{include:"#interface-member"},{include:"#punctuation-semicolon"}]},"interface-heritage":{begin:"\\b(extends)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"((?=\\{)|(?=;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b))",name:"meta.interface-heritage.typespec",patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},"interface-member":{begin:"(?:\\b(op)\\b\\s+)?(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"entity.name.function.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.interface-member.typespec",patterns:[{include:"#token"},{include:"#operation-signature"}]},"interface-statement":{begin:"\\b(interface)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"(?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.interface-statement.typespec",patterns:[{include:"#token"},{include:"#type-parameters"},{include:"#interface-heritage"},{include:"#interface-body"},{include:"#expression"}]},"line-comment":{match:"//.*$",name:"comment.line.double-slash.tsp"},"model-expression":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.tsp"}},name:"meta.model-expression.typespec",patterns:[{include:"#model-property"},{include:"#token"},{include:"#directive"},{include:"#decorator"},{include:"#spread-operator"},{include:"#punctuation-semicolon"}]},"model-heritage":{begin:"\\b(extends|is)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"((?=\\{)|(?=;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b))",name:"meta.model-heritage.typespec",patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},"model-property":{begin:'(?:(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)|(\\"(?:[^\\"\\\\]|\\\\.)*\\"))',beginCaptures:{1:{name:"variable.name.tsp"},2:{name:"string.quoted.double.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.model-property.typespec",patterns:[{include:"#token"},{include:"#type-annotation"},{include:"#operator-assignment"},{include:"#expression"}]},"model-statement":{begin:"\\b(model)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"(?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.model-statement.typespec",patterns:[{include:"#token"},{include:"#type-parameters"},{include:"#model-heritage"},{include:"#expression"}]},"namespace-body":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.tsp"}},name:"meta.namespace-body.typespec",patterns:[{include:"#statement"}]},"namespace-name":{begin:"(?=[_$[:alpha:]])",end:"((?=\\{)|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b))",name:"meta.namespace-name.typespec",patterns:[{include:"#identifier-expression"},{include:"#punctuation-accessor"}]},"namespace-statement":{begin:"\\b(namespace)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"((?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b))",name:"meta.namespace-statement.typespec",patterns:[{include:"#token"},{include:"#namespace-name"},{include:"#namespace-body"}]},"numeric-literal":{match:"(?:\\b(?<!\\$)0(?:x|X)[0-9a-fA-F][0-9a-fA-F_]*(n)?\\b(?!\\$)|\\b(?<!\\$)0(?:b|B)[01][01_]*(n)?\\b(?!\\$)|(?<!\\$)(?:(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\B(\\.)[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*[eE][+-]?[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(\\.)(n)?\\B)|(?:\\B(\\.)[0-9][0-9_]*(n)?\\b)|(?:\\b[0-9][0-9_]*(n)?\\b(?!\\.)))(?!\\$))",name:"constant.numeric.tsp"},"object-literal":{begin:"#\\{",beginCaptures:{0:{name:"punctuation.hashcurlybrace.open.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.tsp"}},name:"meta.object-literal.typespec",patterns:[{include:"#token"},{include:"#object-literal-property"},{include:"#directive"},{include:"#spread-operator"},{include:"#punctuation-comma"}]},"object-literal-property":{begin:"(?:(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)\\s*(:))",beginCaptures:{1:{name:"variable.name.tsp"},2:{name:"keyword.operator.type.annotation.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.object-literal-property.typespec",patterns:[{include:"#token"},{include:"#expression"}]},"operation-heritage":{begin:"\\b(is)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.operation-heritage.typespec",patterns:[{include:"#expression"}]},"operation-parameters":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.tsp"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.tsp"}},name:"meta.operation-parameters.typespec",patterns:[{include:"#token"},{include:"#decorator"},{include:"#model-property"},{include:"#spread-operator"},{include:"#punctuation-comma"}]},"operation-signature":{patterns:[{include:"#type-parameters"},{include:"#operation-heritage"},{include:"#operation-parameters"},{include:"#type-annotation"}]},"operation-statement":{begin:"\\b(op)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"entity.name.function.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.operation-statement.typespec",patterns:[{include:"#token"},{include:"#operation-signature"}]},"operator-assignment":{match:"=",name:"keyword.operator.assignment.tsp"},"parenthesized-expression":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.tsp"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.tsp"}},name:"meta.parenthesized-expression.typespec",patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},projection:{begin:"(from|to)",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"((?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b))",name:"meta.projection.typespec",patterns:[{include:"#projection-parameters"},{include:"#projection-body"}]},"projection-body":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.tsp"}},name:"meta.projection-body.typespec",patterns:[{include:"#projection-expression"},{include:"#punctuation-semicolon"}]},"projection-expression":{patterns:[{include:"#else-if-expression"},{include:"#if-expression"},{include:"#else-expression"},{include:"#function-call"}]},"projection-parameter":{begin:"(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"variable.name.tsp"}},end:"(?=\\))|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.projection-parameter.typespec",patterns:[]},"projection-parameters":{begin:"\\(",beginCaptures:{0:{name:"punctuation.parenthesis.open.tsp"}},end:"\\)",endCaptures:{0:{name:"punctuation.parenthesis.close.tsp"}},name:"meta.projection-parameters.typespec",patterns:[{include:"#token"},{include:"#projection-parameter"}]},"projection-statement":{begin:"\\b(projection)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)(#)(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"keyword.other.tsp"},3:{name:"keyword.operator.selector.tsp"},4:{name:"variable.name.tsp"}},end:"((?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b))",name:"meta.projection-statement.typespec",patterns:[{include:"#projection-statement-body"}]},"projection-statement-body":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.tsp"}},name:"meta.projection-statement-body.typespec",patterns:[{include:"#projection"}]},"punctuation-accessor":{match:"\\.",name:"punctuation.accessor.tsp"},"punctuation-comma":{match:",",name:"punctuation.comma.tsp"},"punctuation-semicolon":{match:";",name:"punctuation.terminator.statement.tsp"},"scalar-body":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.tsp"}},name:"meta.scalar-body.typespec",patterns:[{include:"#token"},{include:"#directive"},{include:"#scalar-constructor"},{include:"#punctuation-semicolon"}]},"scalar-constructor":{begin:"\\b(init)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"entity.name.function.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.scalar-constructor.typespec",patterns:[{include:"#token"},{include:"#operation-parameters"}]},"scalar-extends":{begin:"\\b(extends)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"(?=;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.scalar-extends.typespec",patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},"scalar-statement":{begin:"\\b(scalar)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"entity.name.type.tsp"}},end:"(?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.scalar-statement.typespec",patterns:[{include:"#token"},{include:"#type-parameters"},{include:"#scalar-extends"},{include:"#scalar-body"}]},"spread-operator":{begin:"\\.\\.\\.",beginCaptures:{0:{name:"keyword.operator.spread.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.spread-operator.typespec",patterns:[{include:"#expression"}]},statement:{patterns:[{include:"#token"},{include:"#directive"},{include:"#augment-decorator-statement"},{include:"#decorator"},{include:"#model-statement"},{include:"#scalar-statement"},{include:"#union-statement"},{include:"#interface-statement"},{include:"#enum-statement"},{include:"#alias-statement"},{include:"#const-statement"},{include:"#namespace-statement"},{include:"#operation-statement"},{include:"#import-statement"},{include:"#using-statement"},{include:"#decorator-declaration-statement"},{include:"#function-declaration-statement"},{include:"#projection-statement"},{include:"#punctuation-semicolon"}]},"string-literal":{begin:'"',end:'"|$',name:"string.quoted.double.tsp",patterns:[{include:"#template-expression"},{include:"#escape-character"}]},"template-expression":{begin:"\\$\\{",beginCaptures:{0:{name:"punctuation.definition.template-expression.begin.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.template-expression.end.tsp"}},name:"meta.template-expression.typespec",patterns:[{include:"#expression"}]},token:{patterns:[{include:"#doc-comment"},{include:"#line-comment"},{include:"#block-comment"},{include:"#triple-quoted-string-literal"},{include:"#string-literal"},{include:"#boolean-literal"},{include:"#numeric-literal"}]},"triple-quoted-string-literal":{begin:'"""',end:'"""',name:"string.quoted.triple.tsp",patterns:[{include:"#template-expression"},{include:"#escape-character"}]},"tuple-expression":{begin:"\\[",beginCaptures:{0:{name:"punctuation.squarebracket.open.tsp"}},end:"\\]",endCaptures:{0:{name:"punctuation.squarebracket.close.tsp"}},name:"meta.tuple-expression.typespec",patterns:[{include:"#expression"}]},"tuple-literal":{begin:"#\\[",beginCaptures:{0:{name:"punctuation.hashsquarebracket.open.tsp"}},end:"\\]",endCaptures:{0:{name:"punctuation.squarebracket.close.tsp"}},name:"meta.tuple-literal.typespec",patterns:[{include:"#expression"},{include:"#punctuation-comma"}]},"type-annotation":{begin:"\\s*(\\??)\\s*(:)",beginCaptures:{1:{name:"keyword.operator.optional.tsp"},2:{name:"keyword.operator.type.annotation.tsp"}},end:"(?=,|;|@|\\)|\\}|=|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.type-annotation.typespec",patterns:[{include:"#expression"}]},"type-argument":{begin:"(?:(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)\\s*(=))",beginCaptures:{1:{name:"entity.name.type.tsp"},2:{name:"keyword.operator.assignment.tsp"}},end:"=",endCaptures:{0:{name:"keyword.operator.assignment.tsp"}},name:"meta.type-argument.typespec",patterns:[{include:"#token"},{include:"#expression"},{include:"#punctuation-comma"}]},"type-arguments":{begin:"<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.tsp"}},end:">",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.tsp"}},name:"meta.type-arguments.typespec",patterns:[{include:"#type-argument"},{include:"#expression"},{include:"#punctuation-comma"}]},"type-parameter":{begin:"(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"entity.name.type.tsp"}},end:"(?=>)|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.type-parameter.typespec",patterns:[{include:"#token"},{include:"#type-parameter-constraint"},{include:"#type-parameter-default"}]},"type-parameter-constraint":{begin:"extends",beginCaptures:{0:{name:"keyword.other.tsp"}},end:"(?=>)|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.type-parameter-constraint.typespec",patterns:[{include:"#expression"}]},"type-parameter-default":{begin:"=",beginCaptures:{0:{name:"keyword.operator.assignment.tsp"}},end:"(?=>)|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.type-parameter-default.typespec",patterns:[{include:"#expression"}]},"type-parameters":{begin:"<",beginCaptures:{0:{name:"punctuation.definition.typeparameters.begin.tsp"}},end:">",endCaptures:{0:{name:"punctuation.definition.typeparameters.end.tsp"}},name:"meta.type-parameters.typespec",patterns:[{include:"#type-parameter"},{include:"#punctuation-comma"}]},typeof:{begin:"\\b(typeof)",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"(?=>)|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.typeof.typespec",patterns:[{include:"#expression"}]},"union-body":{begin:"\\{",beginCaptures:{0:{name:"punctuation.curlybrace.open.tsp"}},end:"\\}",endCaptures:{0:{name:"punctuation.curlybrace.close.tsp"}},name:"meta.union-body.typespec",patterns:[{include:"#union-variant"},{include:"#token"},{include:"#directive"},{include:"#decorator"},{include:"#expression"},{include:"#punctuation-comma"}]},"union-statement":{begin:"\\b(union)\\b\\s+(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)",beginCaptures:{1:{name:"keyword.other.tsp"},2:{name:"entity.name.type.tsp"}},end:"(?<=\\})|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.union-statement.typespec",patterns:[{include:"#token"},{include:"#union-body"}]},"union-variant":{begin:"(?:(\\b[_$[:alpha:]][_$[:alnum:]]*\\b|`(?:[^`\\\\]|\\\\.)*`)\\s*(:))",beginCaptures:{1:{name:"variable.name.tsp"},2:{name:"keyword.operator.type.annotation.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.union-variant.typespec",patterns:[{include:"#token"},{include:"#expression"}]},"using-statement":{begin:"\\b(using)\\b",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.using-statement.typespec",patterns:[{include:"#token"},{include:"#identifier-expression"}]},valueof:{begin:"\\b(valueof)",beginCaptures:{1:{name:"keyword.other.tsp"}},end:"(?=>)|(?=,|;|@|\\)|\\}|\\b(?:extern)\\b|\\b(?:namespace|model|op|using|import|enum|alias|union|interface|dec|fn)\\b)",name:"meta.valueof.typespec",patterns:[{include:"#expression"}]}},scopeName:"source.tsp",aliases:["tsp"]})];export{e as default};
//# sourceMappingURL=typespec.mjs.map
