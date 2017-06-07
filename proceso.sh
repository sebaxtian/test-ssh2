#!/bin/bash

#
# Este script simula el tiempo de ejecucion de un proceso.
#


echo "Inicia el proceso"
# Un proceso con tiempo de ejecucion variable
TIEMPO=$(( RANDOM % (30 - 10 + 1 ) + 10 ))
echo "El proceso tarda "$TIEMPO" segundos"
sleep $TIEMPO
echo "Termina el proceso"
