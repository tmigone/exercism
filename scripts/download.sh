#!/bin/zsh
set -e

# Teams edition
exercism download --track=typescript --exercise=$1 --team=balena
npm --prefix teams/balena/typescript/$1 install

# Personal edition
exercism download --track=typescript --exercise=$1
npm --prefix typescript/$1 install