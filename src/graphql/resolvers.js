import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

const resolversArray = loadFilesSync("./src/graphql/modules/**/resolvers.js");
const resolvers = mergeResolvers(resolversArray);

export default resolvers;
