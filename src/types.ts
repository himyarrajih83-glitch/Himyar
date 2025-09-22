/**
 * Defines the available views (screens) in the Aether application.
 */
export enum View {
    // Core Views
    Cortex = 'CORTEX', // القشرة الإدراكية
    Dashboard = 'DASHBOARD', // لوحة التحكم
    Atelier = 'ATELIER', // المرسم
    Weaver = 'WEAVER', // النسّاج

    // Agent & System Views
    Agent = 'AGENT', // وكيل التنفيذ (أكسا)
    RealityBridge = 'REALITY_BRIDGE', // جسر الواقع
    Launchpad = 'LAUNCHPAD', // منصة الإطلاق

    // Informational Views
    Identity = 'IDENTITY', // مزامنة الهوية
    Economy = 'ECONOMY', // الاقتصاد
    Skills = 'SKILLS', // المهارات
    DAO = 'DAO', // الداو
    Academy = 'ACADEMY', // الأكاديمية
    API = 'API' // الواجهة
}

// We will expand this file later with more types like Memory, ChatMessage, etc.
