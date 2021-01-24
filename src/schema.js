// 모든 파일들일 이파일에서 합친다. api 폴더 아네 아주 많은 graphql파일들이 추가될거고, 
// 같은 위치에 resolvers 파일들이 추가된다.

import {makeExecutableSchema} from "graphql-tools";
import {fileLoader, mergeResolvers, mergeTypes} from "merge-graphql-schemas";

import path from "path";

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"))
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"))

const schema = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
});

export default schema;