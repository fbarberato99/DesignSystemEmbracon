<script setup lang="ts">
import { ref, computed } from 'vue'
import type { UploadFilesProps, UploadFilesEmits, UploadedFile } from './UploadFiles.types'

const props = withDefaults(defineProps<UploadFilesProps>(), {
  disabled: false,
  accept: () => ['jpeg', 'png', 'pdf'],
  sizeLimit: 8,
  wrongFileTypeMessage: 'Somente imagens JPEG são aceitas.',
  tooltiptext: ''
})

const emit = defineEmits<UploadFilesEmits>()

const fileInputRef = ref<HTMLInputElement | null>(null)
const uploadedFile = ref<UploadedFile | null>(null)
const isUploading = ref(false)
const hasError = ref(false)
const errorMessage = ref('')

// Estado atual do componente
const currentState = computed(() => {
  if (hasError.value) return 'erro'
  if (isUploading.value) return 'carregando'
  if (uploadedFile.value) return 'anexado'
  return 'neutro'
})

// Formata os tipos aceitos para exibição
const acceptedTypesDisplay = computed(() => {
  return props.accept.join(', ')
})

// Abre o seletor de arquivos
const openFileSelector = () => {
  if (props.disabled || isUploading.value) return
  fileInputRef.value?.click()
}

// Processa o arquivo selecionado
const handleFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (!file) return
  
  // Valida o tamanho
  const fileSizeMB = file.size / (1024 * 1024)
  if (fileSizeMB > props.sizeLimit) {
    hasError.value = true
    errorMessage.value = `Arquivo grande. Máx ${props.sizeLimit}MB`
    return
  }
  
  // Valida o tipo
  const fileExtension = file.name.split('.').pop()?.toLowerCase() || ''
  if (!props.accept.includes(fileExtension)) {
    hasError.value = true
    errorMessage.value = props.wrongFileTypeMessage
    return
  }
  
  // Simula upload
  isUploading.value = true
  hasError.value = false
  
  try {
    // Converte para base64
    const base64 = await fileToBase64(file)
    
    // Simula delay de upload
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    uploadedFile.value = {
      name: file.name,
      base64,
      type: file.type,
      size: file.size
    }
    
    emit('input', {
      name: file.name,
      base64,
      type: file.type
    })
  } catch (error) {
    hasError.value = true
    errorMessage.value = 'Erro ao fazer upload'
  } finally {
    isUploading.value = false
  }
  
  // Limpa o input para permitir selecionar o mesmo arquivo novamente
  target.value = ''
}

// Converte arquivo para base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })
}

// Remove o arquivo
const removeFile = () => {
  uploadedFile.value = null
  hasError.value = false
  emit('input', null)
}

// Tenta novamente após erro
const retry = () => {
  hasError.value = false
  errorMessage.value = ''
  openFileSelector()
}

// Visualiza o anexo
const viewAttachment = () => {
  if (!uploadedFile.value) return
  
  // Abre em nova aba
  const win = window.open()
  if (win) {
    win.document.write(`<iframe src="${uploadedFile.value.base64}" frameborder="0" style="border:0; top:0; left:0; bottom:0; right:0; width:100%; height:100%;" allowfullscreen></iframe>`)
  }
}

</script>

<template>
  <div class="upload-files" :class="`upload-files--${currentState}`">
    <!-- Input oculto -->
    <input
      ref="fileInputRef"
      type="file"
      class="upload-files-input"
      :accept="accept.map(ext => `.${ext}`).join(',')"
      :disabled="disabled"
      @change="handleFileChange"
    />

    <!-- Estado Neutro -->
    <div
      v-if="currentState === 'neutro'"
      class="upload-files-content upload-files-content--neutro"
      @click="openFileSelector"
    >
      <div class="upload-files-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" viewBox="0 0 25 33" fill="none">
          <path d="M0 28.875V9.28125L9.28125 0H20.625C21.719 0 22.7682 0.434597 23.5418 1.20818C24.3154 1.98177 24.75 3.03098 24.75 4.125V28.875C24.75 29.969 24.3154 31.0182 23.5418 31.7918C22.7682 32.5654 21.719 33 20.625 33H4.125C3.03098 33 1.98177 32.5654 1.20819 31.7918C0.434597 31.0182 0 29.969 0 28.875ZM9.28125 6.1875C9.28125 7.00801 8.9553 7.79492 8.37511 8.37511C7.79492 8.9553 7.00801 9.28125 6.1875 9.28125H2.0625V28.875C2.0625 29.422 2.2798 29.9466 2.66659 30.3334C3.05339 30.7202 3.57799 30.9375 4.125 30.9375H20.625C21.172 30.9375 21.6966 30.7202 22.0834 30.3334C22.4702 29.9466 22.6875 29.422 22.6875 28.875V4.125C22.6875 3.57799 22.4702 3.05339 22.0834 2.66659C21.6966 2.2798 21.172 2.0625 20.625 2.0625H9.28125V6.1875Z" fill="#8E9195"/>
          <path d="M11.3503 13.4045C11.3503 13.131 11.4581 12.8687 11.65 12.6753C11.842 12.4819 12.1023 12.3732 12.3737 12.3732C12.6451 12.3732 12.9055 12.4819 13.0974 12.6753C13.2893 12.8687 13.3971 13.131 13.3971 13.4045V21.2275L15.7429 18.8619C15.935 18.6682 16.1957 18.5594 16.4675 18.5594C16.7392 18.5594 16.9999 18.6682 17.1921 18.8619C17.3842 19.0555 17.4922 19.3181 17.4922 19.592C17.4922 19.8658 17.3842 20.1285 17.1921 20.3221L13.0983 24.4471C13.0032 24.5431 12.8903 24.6193 12.766 24.6713C12.6416 24.7233 12.5083 24.7501 12.3737 24.7501C12.2391 24.7501 12.1058 24.7233 11.9815 24.6713C11.8571 24.6193 11.7442 24.5431 11.6491 24.4471L7.55536 20.3221C7.36319 20.1285 7.25523 19.8658 7.25523 19.592C7.25523 19.3181 7.36319 19.0555 7.55536 18.8619C7.74754 18.6682 8.00818 18.5594 8.27996 18.5594C8.55173 18.5594 8.81238 18.6682 9.00455 18.8619L11.3503 21.2275V13.4045Z" fill="#8E9195"/>
        </svg>
      </div>
      
      <div class="upload-files-text">
        <div class="upload-files-title-row">
          <span class="upload-files-title">{{ titulo }}</span>
          <div v-if="tooltiptext" class="upload-files-tooltip">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_2674_2881)">
                <path d="M6.90411 13.125C5.30191 13.125 3.76534 12.4797 2.63241 11.331C1.49948 10.1824 0.863014 8.62445 0.863014 7C0.863014 5.37555 1.49948 3.81763 2.63241 2.66897C3.76534 1.52031 5.30191 0.875 6.90411 0.875C8.50631 0.875 10.0429 1.52031 11.1758 2.66897C12.3087 3.81763 12.9452 5.37555 12.9452 7C12.9452 8.62445 12.3087 10.1824 11.1758 11.331C10.0429 12.4797 8.50631 13.125 6.90411 13.125ZM6.90411 14C8.73519 14 10.4913 13.2625 11.7861 11.9497C13.0808 10.637 13.8082 8.85652 13.8082 7C13.8082 5.14348 13.0808 3.36301 11.7861 2.05025C10.4913 0.737498 8.73519 0 6.90411 0C5.07303 0 3.31694 0.737498 2.02217 2.05025C0.727395 3.36301 0 5.14348 0 7C0 8.85652 0.727395 10.637 2.02217 11.9497C3.31694 13.2625 5.07303 14 6.90411 14Z" fill="#191E26"/>
                <path d="M4.53534 5.06275C4.53416 5.09101 4.53869 5.11921 4.54866 5.14563C4.55862 5.17204 4.57381 5.19611 4.5933 5.21636C4.61278 5.2366 4.63614 5.25259 4.66194 5.26334C4.68774 5.27409 4.71543 5.27938 4.74333 5.27888H5.45531C5.57441 5.27888 5.66934 5.18 5.68487 5.06013C5.76255 4.48613 6.1509 4.06788 6.84304 4.06788C7.43507 4.06788 7.97704 4.368 7.97704 5.08988C7.97704 5.6455 7.65427 5.901 7.14423 6.2895C6.56342 6.71738 6.10344 7.217 6.13623 8.02813L6.13882 8.218C6.13973 8.27541 6.16286 8.33015 6.20322 8.37042C6.24358 8.41069 6.29794 8.43326 6.35457 8.43325H7.05448C7.1117 8.43325 7.16658 8.4102 7.20704 8.36918C7.2475 8.32816 7.27023 8.27252 7.27023 8.2145V8.12263C7.27023 7.49438 7.50583 7.3115 8.14187 6.82238C8.66745 6.41725 9.21546 5.9675 9.21546 5.02338C9.21546 3.70125 8.11426 3.0625 6.90863 3.0625C5.81519 3.0625 4.61733 3.57875 4.53534 5.06275ZM5.87905 10.1054C5.87905 10.5718 6.24583 10.9165 6.7507 10.9165C7.27627 10.9165 7.63787 10.5718 7.63787 10.1054C7.63787 9.62238 7.27541 9.28288 6.74983 9.28288C6.24583 9.28288 5.87905 9.62238 5.87905 10.1054Z" fill="#191E26"/>
              </g>
              <defs>
                <clipPath id="clip0_2674_2881">
                  <rect width="13.8082" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <p class="upload-files-info">
          <span class="upload-files-types">{{ acceptedTypesDisplay }}</span>
          <span class="upload-files-separator">  |  </span>
          <span class="upload-files-limit">Arquivos de até {{ sizeLimit }}mb</span>
        </p>
      </div>
    </div>

    <!-- Estado Carregando -->
    <div v-if="currentState === 'carregando'" class="upload-files-content upload-files-content--carregando">
      <div class="upload-files-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" viewBox="0 0 25 33" fill="none">
          <path d="M0 28.875V9.28125L9.28125 0H20.625C21.719 0 22.7682 0.434597 23.5418 1.20818C24.3154 1.98177 24.75 3.03098 24.75 4.125V28.875C24.75 29.969 24.3154 31.0182 23.5418 31.7918C22.7682 32.5654 21.719 33 20.625 33H4.125C3.03098 33 1.98177 32.5654 1.20819 31.7918C0.434597 31.0182 0 29.969 0 28.875ZM9.28125 6.1875C9.28125 7.00801 8.9553 7.79492 8.37511 8.37511C7.79492 8.9553 7.00801 9.28125 6.1875 9.28125H2.0625V28.875C2.0625 29.422 2.2798 29.9466 2.66659 30.3334C3.05339 30.7202 3.57799 30.9375 4.125 30.9375H20.625C21.172 30.9375 21.6966 30.7202 22.0834 30.3334C22.4702 29.9466 22.6875 29.422 22.6875 28.875V4.125C22.6875 3.57799 22.4702 3.05339 22.0834 2.66659C21.6966 2.2798 21.172 2.0625 20.625 2.0625H9.28125V6.1875Z" fill="#8E9195"/>
          <path d="M11.3503 13.4045C11.3503 13.131 11.4581 12.8687 11.65 12.6753C11.842 12.4819 12.1023 12.3732 12.3737 12.3732C12.6451 12.3732 12.9055 12.4819 13.0974 12.6753C13.2893 12.8687 13.3971 13.131 13.3971 13.4045V21.2275L15.7429 18.8619C15.935 18.6682 16.1957 18.5594 16.4675 18.5594C16.7392 18.5594 16.9999 18.6682 17.1921 18.8619C17.3842 19.0555 17.4922 19.3181 17.4922 19.592C17.4922 19.8658 17.3842 20.1285 17.1921 20.3221L13.0983 24.4471C13.0032 24.5431 12.8903 24.6193 12.766 24.6713C12.6416 24.7233 12.5083 24.7501 12.3737 24.7501C12.2391 24.7501 12.1058 24.7233 11.9815 24.6713C11.8571 24.6193 11.7442 24.5431 11.6491 24.4471L7.55536 20.3221C7.36319 20.1285 7.25523 19.8658 7.25523 19.592C7.25523 19.3181 7.36319 19.0555 7.55536 18.8619C7.74754 18.6682 8.00818 18.5594 8.27996 18.5594C8.55173 18.5594 8.81238 18.6682 9.00455 18.8619L11.3503 21.2275V13.4045Z" fill="#8E9195"/>
        </svg>
      </div>
      
      <div class="upload-files-text">
        <span class="upload-files-title">{{ uploadedFile?.name || titulo }}</span>
        <p class="upload-files-status upload-files-status--loading">Efetuando o upload...</p>
      </div>
    </div>

    <!-- Estado Anexado -->
    <div v-if="currentState === 'anexado'" class="upload-files-content upload-files-content--anexado">
      <div class="upload-files-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" viewBox="0 0 25 33" fill="none">
          <path d="M0 28.875V9.28125L9.28125 0H20.625C21.719 0 22.7682 0.434597 23.5418 1.20818C24.3154 1.98177 24.75 3.03098 24.75 4.125V28.875C24.75 29.969 24.3154 31.0182 23.5418 31.7918C22.7682 32.5654 21.719 33 20.625 33H4.125C3.03098 33 1.98177 32.5654 1.20819 31.7918C0.434597 31.0182 0 29.969 0 28.875ZM9.28125 6.1875C9.28125 7.00801 8.9553 7.79492 8.37511 8.37511C7.79492 8.9553 7.00801 9.28125 6.1875 9.28125H2.0625V28.875C2.0625 29.422 2.2798 29.9466 2.66659 30.3334C3.05339 30.7202 3.57799 30.9375 4.125 30.9375H20.625C21.172 30.9375 21.6966 30.7202 22.0834 30.3334C22.4702 29.9466 22.6875 29.422 22.6875 28.875V4.125C22.6875 3.57799 22.4702 3.05339 22.0834 2.66659C21.6966 2.2798 21.172 2.0625 20.625 2.0625H9.28125V6.1875Z" fill="#8E9195"/>
          <path d="M19.3224 19.6212C19.3224 23.4287 16.4343 26.5152 12.8717 26.5152C9.309 26.5152 6.4209 23.4287 6.4209 19.6212C6.4209 15.8138 9.309 12.7273 12.8717 12.7273C16.4343 12.7273 19.3224 15.8138 19.3224 19.6212Z" fill="#2F9B5A"/>
          <path d="M15.9243 18.5503C16.0344 18.4155 16.0963 18.2326 16.0963 18.042C16.0963 17.8514 16.0344 17.6686 15.9243 17.5338C15.8142 17.399 15.6649 17.3233 15.5092 17.3233C15.3535 17.3233 15.2042 17.399 15.0941 17.5338L11.9914 21.3341L10.6476 19.6873C10.5376 19.5525 10.3882 19.4768 10.2325 19.4768C10.0769 19.4768 9.92754 19.5525 9.81745 19.6873C9.70736 19.8221 9.64551 20.0049 9.64551 20.1956C9.64551 20.3862 9.70736 20.569 9.81745 20.7038L11.5763 22.8573C11.6308 22.9242 11.6955 22.9772 11.7667 23.0134C11.838 23.0496 11.9143 23.0682 11.9914 23.0682C12.0686 23.0682 12.1449 23.0496 12.2161 23.0134C12.2874 22.9772 12.3521 22.9242 12.4065 22.8573L15.9243 18.5503Z" fill="white"/>
        </svg>
      </div>
      
      <div class="upload-files-text">
        <span class="upload-files-title">{{ titulo }}</span>
        <button
          type="button"
          class="upload-files-view"
          @click="viewAttachment"
        >
          Visualizar anexo
        </button>
      </div>

      <button
        type="button"
        class="upload-files-remove"
        aria-label="Remover arquivo"
        @click="removeFile"
      >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17.5" cy="17.5" r="17.5" fill="rgba(235, 0, 86, 0.1)"/>
          <g transform="translate(8.5, 8.5)">
            <path d="M6.1875 6.1875C6.33668 6.1875 6.47976 6.24676 6.58525 6.35225C6.69074 6.45774 6.75 6.60082 6.75 6.75V13.5C6.75 13.6492 6.69074 13.7923 6.58525 13.8977C6.47976 14.0032 6.33668 14.0625 6.1875 14.0625C6.03832 14.0625 5.89524 14.0032 5.78975 13.8977C5.68426 13.7923 5.625 13.6492 5.625 13.5V6.75C5.625 6.60082 5.68426 6.45774 5.78975 6.35225C5.89524 6.24676 6.03832 6.1875 6.1875 6.1875ZM9 6.1875C9.14918 6.1875 9.29226 6.24676 9.39775 6.35225C9.50324 6.45774 9.5625 6.60082 9.5625 6.75V13.5C9.5625 13.6492 9.50324 13.7923 9.39775 13.8977C9.29226 14.0032 9.14918 14.0625 9 14.0625C8.85082 14.0625 8.70774 14.0032 8.60225 13.8977C8.49676 13.7923 8.4375 13.6492 8.4375 13.5V6.75C8.4375 6.60082 8.49676 6.45774 8.60225 6.35225C8.70774 6.24676 8.85082 6.1875 9 6.1875ZM12.375 6.75C12.375 6.60082 12.3157 6.45774 12.2102 6.35225C12.1048 6.24676 11.9617 6.1875 11.8125 6.1875C11.6633 6.1875 11.5202 6.24676 11.4148 6.35225C11.3093 6.45774 11.25 6.60082 11.25 6.75V13.5C11.25 13.6492 11.3093 13.7923 11.4148 13.8977C11.5202 14.0032 11.6633 14.0625 11.8125 14.0625C11.9617 14.0625 12.1048 14.0032 12.2102 13.8977C12.3157 13.7923 12.375 13.6492 12.375 13.5V6.75Z" fill="#EB0056"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3125 3.375C16.3125 3.67337 16.194 3.95952 15.983 4.1705C15.772 4.38147 15.4859 4.5 15.1875 4.5H14.625V14.625C14.625 15.2217 14.3879 15.794 13.966 16.216C13.544 16.6379 12.9717 16.875 12.375 16.875H5.625C5.02826 16.875 4.45597 16.6379 4.03401 16.216C3.61205 15.794 3.375 15.2217 3.375 14.625V4.5H2.8125C2.51413 4.5 2.22798 4.38147 2.017 4.1705C1.80603 3.95952 1.6875 3.67337 1.6875 3.375V2.25C1.6875 1.95163 1.80603 1.66548 2.017 1.4545C2.22798 1.24353 2.51413 1.125 2.8125 1.125H6.75C6.75 0.826631 6.86853 0.540483 7.0795 0.329505C7.29048 0.118526 7.57663 0 7.875 0L10.125 0C10.4234 0 10.7095 0.118526 10.9205 0.329505C11.1315 0.540483 11.25 0.826631 11.25 1.125H15.1875C15.4859 1.125 15.772 1.24353 15.983 1.4545C16.194 1.66548 16.3125 1.95163 16.3125 2.25V3.375ZM4.63275 4.5L4.5 4.56637V14.625C4.5 14.9234 4.61853 15.2095 4.8295 15.4205C5.04048 15.6315 5.32663 15.75 5.625 15.75H12.375C12.6734 15.75 12.9595 15.6315 13.1705 15.4205C13.3815 15.2095 13.5 14.9234 13.5 14.625V4.56637L13.3673 4.5H4.63275ZM2.8125 3.375V2.25H15.1875V3.375H2.8125Z" fill="#EB0056"/>
          </g>
        </svg>
      </button>
    </div>

    <!-- Estado Erro -->
    <div v-if="currentState === 'erro'" class="upload-files-content upload-files-content--erro">
      <div class="upload-files-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="33" viewBox="0 0 25 33" fill="none">
          <path d="M0 28.875V9.28125L9.28125 0H20.625C21.719 0 22.7682 0.434597 23.5418 1.20818C24.3154 1.98177 24.75 3.03098 24.75 4.125V28.875C24.75 29.969 24.3154 31.0182 23.5418 31.7918C22.7682 32.5654 21.719 33 20.625 33H4.125C3.03098 33 1.98177 32.5654 1.20819 31.7918C0.434597 31.0182 0 29.969 0 28.875ZM9.28125 6.1875C9.28125 7.00801 8.9553 7.79492 8.37511 8.37511C7.79492 8.9553 7.00801 9.28125 6.1875 9.28125H2.0625V28.875C2.0625 29.422 2.2798 29.9466 2.66659 30.3334C3.05339 30.7202 3.57799 30.9375 4.125 30.9375H20.625C21.172 30.9375 21.6966 30.7202 22.0834 30.3334C22.4702 29.9466 22.6875 29.422 22.6875 28.875V4.125C22.6875 3.57799 22.4702 3.05339 22.0834 2.66659C21.6966 2.2798 21.172 2.0625 20.625 2.0625H9.28125V6.1875Z" fill="#8E9195"/>
          <path d="M11.3503 13.4045C11.3503 13.131 11.4581 12.8687 11.65 12.6753C11.842 12.4819 12.1023 12.3732 12.3737 12.3732C12.6451 12.3732 12.9055 12.4819 13.0974 12.6753C13.2893 12.8687 13.3971 13.131 13.3971 13.4045V21.2275L15.7429 18.8619C15.935 18.6682 16.1957 18.5594 16.4675 18.5594C16.7392 18.5594 16.9999 18.6682 17.1921 18.8619C17.3842 19.0555 17.4922 19.3181 17.4922 19.592C17.4922 19.8658 17.3842 20.1285 17.1921 20.3221L13.0983 24.4471C13.0032 24.5431 12.8903 24.6193 12.766 24.6713C12.6416 24.7233 12.5083 24.7501 12.3737 24.7501C12.2391 24.7501 12.1058 24.7233 11.9815 24.6713C11.8571 24.6193 11.7442 24.5431 11.6491 24.4471L7.55536 20.3221C7.36319 20.1285 7.25523 19.8658 7.25523 19.592C7.25523 19.3181 7.36319 19.0555 7.55536 18.8619C7.74754 18.6682 8.00818 18.5594 8.27996 18.5594C8.55173 18.5594 8.81238 18.6682 9.00455 18.8619L11.3503 21.2275V13.4045Z" fill="#8E9195"/>
        </svg>
      </div>
      
      <div class="upload-files-text">
        <span class="upload-files-title">{{ titulo }}</span>
        <p class="upload-files-status upload-files-status--error">{{ errorMessage || 'Erro de upload' }}</p>
      </div>

      <button
        type="button"
        class="upload-files-retry"
        aria-label="Tentar novamente"
        @click="retry"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_684_2766)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0004 4.5C10.3795 4.50062 8.80232 5.02639 7.50523 5.99856C6.20815 6.97072 5.26094 8.33696 4.80547 9.89262C4.35001 11.4483 4.4108 13.1096 4.97875 14.6278C5.54671 16.1461 6.59125 17.4394 7.95592 18.3142C9.32059 19.1889 10.9319 19.598 12.5486 19.4802C14.1653 19.3623 15.7003 18.7238 16.9237 17.6604C18.147 16.597 18.993 15.1658 19.3347 13.5813C19.6765 11.9968 19.4957 10.3442 18.8194 8.871C18.7458 8.69189 18.7443 8.49126 18.8153 8.31108C18.8863 8.13091 19.0241 7.98516 19.2001 7.90435C19.3761 7.82353 19.5765 7.81391 19.7594 7.8775C19.9423 7.94109 20.0935 8.07295 20.1814 8.2455C20.9929 10.0134 21.2098 11.9966 20.7995 13.8981C20.3893 15.7996 19.374 17.5169 17.9058 18.793C16.4376 20.069 14.5955 20.835 12.6554 20.9762C10.7153 21.1175 8.78166 20.6263 7.14413 19.5764C5.50659 18.5264 4.25331 16.9742 3.57202 15.1522C2.89072 13.3301 2.81808 11.3364 3.36497 9.46967C3.91187 7.6029 5.04887 5.96357 6.60565 4.79723C8.16243 3.63089 10.0552 3.00033 12.0004 3V4.5Z" fill="#5E6267" stroke="#5E6267"/>
            <path d="M12 6.69889V0.800885C12 0.72963 12.0204 0.659857 12.0586 0.599737C12.0969 0.539617 12.1514 0.491638 12.216 0.461419C12.2805 0.4312 12.3523 0.419992 12.423 0.429106C12.4936 0.438221 12.5602 0.467282 12.615 0.512885L16.155 3.46188C16.335 3.61189 16.335 3.88788 16.155 4.03788L12.615 6.98689C12.5602 7.03249 12.4936 7.06155 12.423 7.07066C12.3523 7.07978 12.2805 7.06857 12.216 7.03835C12.1514 7.00813 12.0969 6.96015 12.0586 6.90003C12.0204 6.83991 12 6.77014 12 6.69889Z" fill="#5E6267" stroke="#5E6267"/>
          </g>
          <defs>
            <clipPath id="clip0_684_2766">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>

    <!-- Barra de progresso para carregando -->
    <div v-if="currentState === 'carregando'" class="upload-files-progress"></div>
  </div>
</template>

<style scoped>
.upload-files {
  position: relative;
  width: 343px;
  max-width: 100%;
  height: 80px;
  background: var(--colors-secondary-white);
  border: 1px solid var(--colors-gray-20);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  flex-shrink: 0;
}

.upload-files-input {
  display: none;
}

/* Conteúdo */
.upload-files-content {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 13px;
  gap: 7px;
}

.upload-files-content--neutro {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.upload-files-content--neutro:hover {
  background: var(--colors-gray-10);
}

.upload-files-content--anexado,
.upload-files-content--erro {
  justify-content: space-between;
  padding: 0 13px;
  align-items: center;
}

.upload-files-content--carregando {
  padding: 0 13px;
  align-items: center;
}

/* Ícone */
.upload-files-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  align-self: center;
}

/* Texto */
.upload-files-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  align-self: center;
}

.upload-files-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-8);
}

.upload-files-title {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 600;
  line-height: 1.5;
  color: var(--colors-secondary-gray-graphite);
}

.upload-files-tooltip {
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  cursor: help;
}

.upload-files-info {
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  line-height: 1.5;
  color: var(--colors-gray-70);
  margin: 0;
}

.upload-files-types {
  font-weight: 700;
}

.upload-files-separator {
  font-weight: 400;
}

.upload-files-limit {
  font-weight: 400;
}

/* Status */
.upload-files-status {
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

.upload-files-status--loading {
  color: var(--colors-feedback-neutral-3);
}

.upload-files-status--error {
  color: var(--colors-feedback-critical-3);
}

/* Visualizar anexo */
.upload-files-view {
  padding: 0;
  border: none;
  background: transparent;
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: 700;
  line-height: 1.5;
  color: var(--colors-secondary-blue-light);
  cursor: pointer;
  text-align: left;
  transition: opacity 0.2s ease;
}

.upload-files-view:hover {
  opacity: 0.8;
}

/* Botão remover */
.upload-files-remove {
  flex-shrink: 0;
  width: 35px;
  height: 35px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
}

.upload-files-remove:hover {
  opacity: 0.8;
}

/* Botão retry */
.upload-files-retry {
  flex-shrink: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background: var(--colors-gray-20);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.upload-files-retry:hover {
  background: var(--colors-gray-40);
}

/* Barra de progresso */
.upload-files-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--colors-gray-20);
  overflow: hidden;
}

.upload-files-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--colors-feedback-neutral-3);
  animation: progress 1.5s ease-in-out infinite;
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Estado erro - borda vermelha */
.upload-files--erro {
  border-color: var(--colors-feedback-critical-4);
}

/* Disabled */
.upload-files:has(input:disabled) {
  opacity: 0.5;
  pointer-events: none;
}

.upload-files-content--neutro:has(input:disabled) {
  cursor: not-allowed;
}
</style>
