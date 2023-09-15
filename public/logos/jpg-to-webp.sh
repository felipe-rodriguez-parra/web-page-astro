#!/bin/bash

# Array de nombres de archivo de las fotos JPG
fotos=("css3-icon.jpg" "distrito.jpg" "distrito-noche.jpg" "git-icon.jpg" "jpg-to-webp.js" "react-icon.jpg" "redux.jpg")

# Directorio de salida para los archivos WebP
directorioSalida="webp/"

# Iterar a través de cada foto JPG y ejecutar el comando cwebp
for foto in "${fotos[@]}"
do
  if [[ $foto == *.jpg ]]; then
    # Ejecutar cwebp para convertir la foto JPG a WebP
    cwebp -q 100 "$foto" -o "${directorioSalida}${foto%.jpg}.webp"
    
    # Mover el archivo WebP al directorio de salida
    mv "${directorioSalida}${foto%.jpg}.webp" "${directorioSalida}"
    
    echo "Se convirtió $foto a WebP y se movió a $directorioSalida con éxito."
  else
    echo "$foto no es un archivo JPG. Se omitirá."
  fi
done

