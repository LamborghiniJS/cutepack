
exports.config = {
    paths:[
        './test1.js-n', // -n��������ʾ ���ļ���ѹ��
        './test.js'    
    ],
    options:{
        strict_semicolons: false, //��Ϊtrueʱ��������Ҫд�ϸ�ķֺ�
        mangle_options: {
            //defines: { DEBUG: ['onename', 'false'], VERSION: ['string', '1.0'] },
            except:['onename']  // ����ָ���ı�������������..�����޸�
        },
        squeeze_options:{
        
        },
        gen_options: {
            ascii_only: false,  // pass true if you want to encode non-ASCII characters as \uXXXX.
            inline_script: false // �C pass true to escape occurrences of </script in strings
        }
    }
}

