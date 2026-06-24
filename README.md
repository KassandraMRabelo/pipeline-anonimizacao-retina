# 🩺 Pipeline de Anonimização de Imagens de Retina

[![LGPD](https://img.shields.io/badge/LGPD-Compliant-green)](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
[![Python](https://img.shields.io/badge/Python-3.9%2B-blue)](https://www.python.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-4.8-red)](https://opencv.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

## 📌 Sobre o Projeto

Este projeto implementa um **pipeline funcional** para anonimização de imagens de retina (fundoscopia), alinhado à Lei Geral de Proteção de Dados (LGPD) brasileira. Desenvolvido como Trabalho de Conclusão de Curso (TCC) no IFPI Campus Floriano.

**Autora:** Kassandra Maria de Sousa Rabêlo  E-mail: caflo.2024114tads0011@aluno.ifpi.edu.br
**Orientador:** Prof. Dr. Rafael Angelo Santos Leite  E-mail: rafaelangelo@ifpi.edu.br
**Ano:** 2026

## 🎯 Funcionalidades

- ✅ Remoção de metadados sensíveis (nome, ID, data)
- ✅ Generalização de idade (valores exatos → faixas etárias)
- ✅ Ofuscação da região periorbital (preservando vasos e disco óptico)
- ✅ Geração de relatório em JSON
- ✅ Interface interativa (Google Colab + site guia)

## 🚀 Como Usar

### Opção 1: Google Colab (Recomendado)

1. Acesse este link do Colab: (https://colab.research.google.com/drive/18ON8p39b-rbWDcYEHKAtP92Lvq5Z5ALy?usp=sharing)
2. Execute todas as células
3. Faça upload de uma imagem de retina
4. Baixe a imagem anonimizada e o relatório

### Opção 2: Local (Python)

```bash
git clone https://github.com/KassandraMRabelo/pipeline-anonimizacao-retina.git
cd pipeline-anonimizacao-retina
pip install -r requirements.txt
python pipeline/pipeline_anonimizacao.py --imagem caminho/para/imagem.jpg

### **Pelo terminal:**
```bash
git clone https://github.com/KassandraMRabelo/pipeline-anonimizacao-retina.git
cd pipeline-anonimizacao-retina
# Copiar todos os arquivos para dentro da pasta
git add .
git commit -m "Versão inicial do pipeline e site"
git push origin main

