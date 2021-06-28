module.exports = [
    "",
    {
        title: '新语法',   //分组名称
        collapsable: true, // 是否折叠
        children: [
            "NewGrammar/Let",
            "NewGrammar/Const",
            "NewGrammar/DestructuringAssignment",
            "NewGrammar/ParameterDefaultValue",
            "NewGrammar/SimplifyObjectWriting",
            "NewGrammar/TemplateString",
            "NewGrammar/RestParameters",
            "NewGrammar/SpreadOperator",
            "NewGrammar/ArrowFunctions",
            "NewGrammar/BasicUseOfSymbol",
            "NewGrammar/Iterator",
            "NewGrammar/GeneratorFunction",
            "NewGrammar/Promise",
            "NewGrammar/Class",
            "NewGrammar/Set",
            "NewGrammar/Map",
        ],
    },
    {
        title: '基础',   //分组名称
        collapsable: true, // 是否折叠
        children: [
            "Object",
            "Function",
            "Array",
            "GarbageCollection",
            "Packaging",
            "String",
            "RegularExpressions",
            "DOM",
            "BOM",
            "OperationClass",
            "JSON",
            "IIFE",
            "Proxy",
        ],
    },
    {
        title: '进阶',   //分组名称
        collapsable: true, // 是否折叠
        children: [
            "Advanced/Data&Memory&Variables",
            "Advanced/IIFE",
            "Advanced/TypeOfData",
            "Advanced/this",
            "Advanced/Scope",
            "Advanced/CodeExecution",
            "Advanced/Closure",
            "Advanced/Variable&FunctionPromotion",
            "Advanced/ExecutionContext",
            "Advanced/ExecutionContextStack",
            "Advanced/FunctionExpansion",
            "Advanced/ObjectExpansion",
        ],
    },
]