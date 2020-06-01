output = open("pokemonRequires.js", "w")
output.write("export function getImageRequire(id) {\n\tswitch (id) {\n")
for i in range(1, 719):
    output.write("\t\tcase " + str(i) + ":\n")
    output.write("\t\t\treturn require('./assets/pokemon-assets/" + str(i) + ".png')\n")
output.write("\t\tdefault:\n\t\t\treturn null\n\t}\n}")
output.close()