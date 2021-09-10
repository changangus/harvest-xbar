#!/bin/bash

PLUGIN_FILENAME="harvest.1s.js"

ln -sf "$(pwd)/$PLUGIN_FILENAME" "$HOME/Library/Application Support/xbar/plugins/$PLUGIN_FILENAME"

echo "Symlinked $PLUGIN_FILENAME Success"