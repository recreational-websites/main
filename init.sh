#!/bin/sh

set -e

git submodule update --init

for dir in "./submodules"/*/; do
  cp "$dir.env.sample" "$dir.env"
done
